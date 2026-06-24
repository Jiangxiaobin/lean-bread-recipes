import type { IngredientDef, Recipe } from '../types/recipe';

/**
 * Calculate the absolute weight for an ingredient given a total flour weight.
 *   weight = (percentage / 100) * totalFlourWeight
 */
export function calcIngredientWeight(
  ingredient: IngredientDef,
  totalFlourWeight: number
): number {
  return (ingredient.percentage / 100) * totalFlourWeight;
}

/**
 * Calculate all ingredient weights from a total flour weight.
 * Returns a Record mapping ingredient id → absolute weight in grams.
 */
export function calcAllWeights(
  ingredients: IngredientDef[],
  totalFlourWeight: number
): Record<string, number> {
  const weights: Record<string, number> = {};
  for (const ing of ingredients) {
    weights[ing.id] = calcIngredientWeight(ing, totalFlourWeight);
  }
  return weights;
}

/**
 * Given an ingredient and its NEW absolute weight, calculate the implied
 * total flour weight.
 *
 *   ingredient.weight = (ingredient.percentage / 100) * totalFlourWeight
 *   => totalFlourWeight = (ingredient.weight * 100) / ingredient.percentage
 */
export function calcFlourWeightFromIngredient(
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
 * The main recalculation entry point.
 *
 * When the user changes ingredient `adjustedIngredientId` to `newWeight` grams:
 * 1. Find that ingredient's baker's percentage
 * 2. Derive the implied total flour weight
 * 3. Recalculate ALL ingredients from the new flour weight
 * 4. Round appropriately (small quantities to 0.1g, rest to whole grams)
 */
export function recalculateFromIngredient(
  recipe: Recipe,
  adjustedIngredientId: string,
  newWeight: number
): {
  currentFlourWeight: number;
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

  const newFlourWeight = calcFlourWeightFromIngredient(ingredient, newWeight);
  const newWeights = calcAllWeights(recipe.ingredients, newFlourWeight);

  // Round: salt/yeast (≤2%) to 0.1g, others to whole grams
  const roundedWeights: Record<string, number> = {};
  for (const [id, weight] of Object.entries(newWeights)) {
    const ing = recipe.ingredients.find((i) => i.id === id);
    const isSmallQuantity = ing ? ing.percentage <= 2 : false;
    roundedWeights[id] = isSmallQuantity
      ? Math.round(weight * 10) / 10
      : Math.round(weight);
  }

  return {
    currentFlourWeight: Math.round(newFlourWeight),
    currentWeights: roundedWeights,
    lastAdjustedIngredientId: adjustedIngredientId,
  };
}

/**
 * Calculate the total dough weight (sum of all ingredient weights).
 */
export function calcTotalDoughWeight(
  weights: Record<string, number>
): number {
  return Object.values(weights).reduce((sum, w) => sum + w, 0);
}
