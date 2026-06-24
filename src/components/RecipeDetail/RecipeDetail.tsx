import type { Recipe } from '../../types/recipe';
import { RecipeHeader } from './RecipeHeader';
import { AdjustmentPanel } from './AdjustmentPanel';
import { PrefermentPanel } from './PrefermentPanel';
import { InstructionsPanel } from './InstructionsPanel';
import styles from './RecipeDetail.module.css';

interface RecipeDetailProps {
  recipe: Recipe;
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  return (
    <div className={styles.detail}>
      <RecipeHeader recipe={recipe} />
      <AdjustmentPanel recipe={recipe} />
      {recipe.preferment && <PrefermentPanel preferment={recipe.preferment} />}
      <InstructionsPanel recipe={recipe} />
    </div>
  );
}
