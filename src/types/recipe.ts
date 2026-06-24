/** Categories of lean bread recipes */
export const RecipeCategory = {
  HARD_EUROPEAN: 'hard-european',
  BAGUETTE: 'baguette',
  CIABATTA: 'ciabatta',
  OTHER: 'other',
} as const;

export type RecipeCategory = (typeof RecipeCategory)[keyof typeof RecipeCategory];

/** Category display metadata */
export interface CategoryInfo {
  id: RecipeCategory;
  name: string;
  nameZh: string;
  color: string;
  description: string;
}

/** An ingredient definition using baker's percentages as the source of truth */
export interface IngredientDef {
  id: string;
  name: string;
  nameZh: string;
  /** Baker's percentage relative to total flour (100%) */
  percentage: number;
  /** Does this ingredient count toward the 100% flour base? */
  isFlour: boolean;
}

/** A preferment (poolish, biga, sourdough levain) used in the recipe */
export interface Preferment {
  name: string;
  nameZh: string;
  description: string;
  /** Ingredients used in the preferment sub-recipe */
  ingredients: IngredientDef[];
  /** Percentage of total flour that goes into the preferment */
  flourPercentageOfTotal: number;
  instructions: string;
  instructionsZh: string;
}

/** A single step in the recipe instructions */
export interface RecipeStep {
  stepNumber: number;
  instruction: string;
  instructionZh: string;
  durationMinutes?: number;
  tip?: string;
  tipZh?: string;
}

/** The complete recipe definition */
export interface Recipe {
  id: string;
  name: string;
  nameZh: string;
  category: RecipeCategory;
  description: string;
  descriptionZh: string;
  /** Default total flour weight in grams */
  defaultFlourWeight: number;
  /** Hydration percentage (water / flour * 100) */
  hydration: number;
  /** Ingredients expressed as baker's percentages */
  ingredients: IngredientDef[];
  /** Optional preferment definition */
  preferment?: Preferment;
  /** Step-by-step instructions */
  steps: RecipeStep[];
  /** Baker's tips */
  tips: string[];
  tipsZh: string[];
}

/** Runtime state: a recipe with current (possibly user-adjusted) absolute weights */
export interface RecipeState {
  recipe: Recipe;
  currentFlourWeight: number;
  currentWeights: Record<string, number>;
  lastAdjustedIngredientId: string | null;
}
