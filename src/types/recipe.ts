/** Scientific baking categories */
export const RecipeCategory = {
  LEAN_BREAD: 'lean-bread',
  ENRICHED_BREAD: 'enriched-bread',
  SWEET_BREAD: 'sweet-bread',
  LAMINATED_PASTRY: 'laminated-pastry',
  COOKIES_CRACKERS: 'cookies-crackers',
  PIES_TARTS: 'pies-tarts',
  SEASONAL: 'seasonal',
} as const;

export type RecipeCategory = (typeof RecipeCategory)[keyof typeof RecipeCategory];

/** Baker's percentage anchor system */
export const BakerSystem = {
  /** Flour = 100%, all ingredients relative to flour (lean/enriched/sweet breads) */
  FLOUR_ANCHOR: 'flour-anchor',
  /** Dual anchor: detrempe flour = 100% + butter block as % of detrempe (laminated) */
  DUAL_ANCHOR: 'dual-anchor',
  /** Butter = 100%, flour/sugar/egg relative to butter (e.g., 3:2:1 shortbread) */
  BUTTER_ANCHOR: 'butter-anchor',
  /** Each ingredient is an independent absolute weight — no cascading (cookies) */
  DIRECT_WEIGHT: 'direct-weight',
} as const;

export type BakerSystem = (typeof BakerSystem)[keyof typeof BakerSystem];

/** Difficulty level */
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

/** Category display metadata */
export interface CategoryInfo {
  id: RecipeCategory;
  name: string;
  nameZh: string;
  color: string;
  description: string;
  descriptionZh: string;
  /** Emoji icon for card decoration */
  icon: string;
  /** Typical hydration range for this category (informational) */
  typicalHydration?: string;
}

/** An ingredient definition using baker's percentages as the source of truth */
export interface IngredientDef {
  id: string;
  name: string;
  nameZh: string;
  /** Baker's percentage relative to the anchor (or absolute grams for direct-weight) */
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

/** Tangzhong (water roux) for Asian enriched breads — pre-cooked, not fermented */
export interface Tangzhong {
  /** Percentage of total flour used in tangzhong (typically 5-10%) */
  flourPercentage: number;
  /** Water-to-flour ratio (typically 5:1) */
  waterRatio: number;
  instructions: string;
  instructionsZh: string;
}

/** Butter block for laminated pastries (croissant, Danish) */
export interface ButterBlock {
  /** Butter block weight as percentage of detrempe flour weight */
  percentageOfDetrempe: number;
  /** Ingredients in the butter block (typically just butter, sometimes with flour) */
  ingredients: IngredientDef[];
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

  /** Which baker's percentage system this recipe uses */
  bakerSystem: BakerSystem;
  /** Default anchor weight in grams (total flour for flour-anchor, butter for butter-anchor, etc.) */
  defaultAnchorWeight: number;
  /** Label for the anchor in the adjustment panel */
  anchorLabel: string;
  anchorLabelZh: string;

  /** Hydration percentage (water / flour * 100). Optional — undefined for cookies/crackers. */
  hydration?: number;

  /** Enriched dough metrics (informational display only) */
  fatPercentage?: number;
  sugarPercentage?: number;
  eggPercentage?: number;

  /** Ingredients expressed as baker's percentages */
  ingredients: IngredientDef[];
  /** Optional preferment definition */
  preferment?: Preferment;
  /** Optional tangzhong for Asian milk breads */
  tangzhong?: Tangzhong;
  /** Optional butter block for laminated pastries */
  butterBlock?: ButterBlock;
  /** Step-by-step instructions */
  steps: RecipeStep[];
  /** Baker's tips */
  tips: string[];
  tipsZh: string[];

  /** Difficulty level */
  difficulty: Difficulty;
  /** Total time in minutes (prep + fermentation + baking) */
  totalTime: number;
  /** What this recipe yields (e.g., "2 loaves", "12 rolls", "~30 crackers") */
  yieldDescription: string;
  yieldDescriptionZh: string;
}

/** Runtime state: a recipe with current (possibly user-adjusted) absolute weights */
export interface RecipeState {
  recipe: Recipe;
  /** Current anchor weight (flour total for flour-anchor, butter for butter-anchor, etc.) */
  currentAnchorWeight: number;
  /** Mapping of ingredient id → current absolute weight in grams */
  currentWeights: Record<string, number>;
  /** Which ingredient was last adjusted (null = defaults) */
  lastAdjustedIngredientId: string | null;
}
