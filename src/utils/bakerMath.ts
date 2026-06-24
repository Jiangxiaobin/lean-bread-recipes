import type { IngredientDef, Recipe, BakerSystem } from '../types/recipe';
import { BakerSystem as BS } from '../types/recipe';

/**
 * Calculate the absolute weight for an ingredient given an anchor weight.
 *
 * For direct-weight systems, percentage IS the gram weight.
 * For all anchor-based systems: weight = (percentage / 100) * anchorWeight
 */
export function calcIngredientWeight(
  ingredient: IngredientDef,
  anchorWeight: number,
  bakerSystem: BakerSystem
): number {
  if (bakerSystem === BS.DIRECT_WEIGHT) {
    return ingredient.percentage;
  }
  return (ingredient.percentage / 100) * anchorWeight;
}

/**
 * Calculate all ingredient weights from an anchor weight.
 */
export function calcAllWeights(
  ingredients: IngredientDef[],
  anchorWeight: number,
  bakerSystem: BakerSystem
): Record<string, number> {
  const weights: Record<string, number> = {};
  for (const ing of ingredients) {
    weights[ing.id] = calcIngredientWeight(ing, anchorWeight, bakerSystem);
  }
  return weights;
}

/**
 * Given an ingredient and its NEW absolute weight, calculate the implied anchor weight.
 *
 *   anchorWeight = (newWeight * 100) / ingredient.percentage
 */
export function calcAnchorWeightFromIngredient(
  ingredient: IngredientDef,
  newWeight: number
): number {
  if (ingredient.percentage === 0) {
    throw new Error(
      `Ingredient "${ingredient.name}" has 0% and cannot anchor recalculation.`
    );
  }
  return (newWeight * 100) / ingredient.percentage;
}

/**
 * Round weights: small-quantity ingredients (≤2%) to 0.1g, others to whole grams.
 * For direct-weight, keep as-is.
 */
function roundWeights(
  weights: Record<string, number>,
  ingredients: IngredientDef[],
  bakerSystem: BakerSystem
): Record<string, number> {
  if (bakerSystem === BS.DIRECT_WEIGHT) {
    // Direct weight: round to 0.1g for small quantities, whole grams otherwise
    const rounded: Record<string, number> = {};
    for (const [id, weight] of Object.entries(weights)) {
      rounded[id] = Math.round(weight * 10) / 10;
    }
    return rounded;
  }

  const rounded: Record<string, number> = {};
  for (const [id, weight] of Object.entries(weights)) {
    const ing = ingredients.find((i) => i.id === id);
    const isSmallQuantity = ing ? ing.percentage <= 2 : false;
    rounded[id] = isSmallQuantity
      ? Math.round(weight * 10) / 10
      : Math.round(weight);
  }
  return rounded;
}

/**
 * The main recalculation entry point.
 *
 * When the user changes ingredient `adjustedIngredientId` to `newWeight` grams:
 * 1. Find that ingredient's baker's percentage
 * 2. Derive the implied anchor weight
 * 3. Recalculate ALL ingredients from the new anchor weight
 * 4. Round appropriately
 *
 * For direct-weight: no cascading — only the changed ingredient updates.
 */
export function recalculateFromIngredient(
  recipe: Recipe,
  adjustedIngredientId: string,
  newWeight: number
): {
  currentAnchorWeight: number;
  currentWeights: Record<string, number>;
  lastAdjustedIngredientId: string;
} {
  const ingredient = recipe.ingredients.find(
    (i) => i.id === adjustedIngredientId
  );
  if (!ingredient) {
    throw new Error(
      `Ingredient "${adjustedIngredientId}" not found in recipe.`
    );
  }

  // Direct-weight: no cascading — only this ingredient changes
  if (recipe.bakerSystem === BS.DIRECT_WEIGHT) {
    return {
      currentAnchorWeight: recipe.defaultAnchorWeight,
      currentWeights: {
        ...calcAllWeights(recipe.ingredients, recipe.defaultAnchorWeight, recipe.bakerSystem),
        [adjustedIngredientId]: Math.round(newWeight * 10) / 10,
      },
      lastAdjustedIngredientId: adjustedIngredientId,
    };
  }

  // Anchor-based: derive new anchor → recalculate all
  const newAnchorWeight = calcAnchorWeightFromIngredient(ingredient, newWeight);
  const newWeights = calcAllWeights(recipe.ingredients, newAnchorWeight, recipe.bakerSystem);
  const roundedWeights = roundWeights(newWeights, recipe.ingredients, recipe.bakerSystem);

  return {
    currentAnchorWeight: Math.round(newAnchorWeight),
    currentWeights: roundedWeights,
    lastAdjustedIngredientId: adjustedIngredientId,
  };
}

/**
 * Calculate total dough weight (sum of all main ingredient weights).
 */
export function calcTotalDoughWeight(
  weights: Record<string, number>
): number {
  return Object.values(weights).reduce((sum, w) => sum + w, 0);
}

/**
 * Calculate tangzhong composition weights from total flour weight.
 * Returns the flour and water amounts for the tangzhong.
 */
export function calcTangzhongWeights(
  totalFlourWeight: number,
  flourPercentage: number,
  waterRatio: number
): { tangzhongFlour: number; tangzhongWater: number } {
  const flour = Math.round((flourPercentage / 100) * totalFlourWeight);
  const water = Math.round(flour * waterRatio);
  return { tangzhongFlour: flour, tangzhongWater: water };
}

/**
 * Calculate butter block total weight for laminated pastries.
 */
export function calcButterBlockWeight(
  detrempeFlourWeight: number,
  percentageOfDetrempe: number
): number {
  return Math.round((percentageOfDetrempe / 100) * detrempeFlourWeight);
}
