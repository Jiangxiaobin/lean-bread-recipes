import type { Recipe } from '../../types/recipe';
import { RecipeHeader } from './RecipeHeader';
import { AdjustmentPanel } from './AdjustmentPanel';
import { PrefermentPanel } from './PrefermentPanel';
import { TangzhongPanel } from './TangzhongPanel';
import { ButterBlockPanel } from './ButterBlockPanel';
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
      {recipe.preferment && (
        <PrefermentPanel preferment={recipe.preferment} />
      )}
      {recipe.tangzhong && (
        <TangzhongPanel
          tangzhong={recipe.tangzhong}
          totalFlourWeight={recipe.defaultAnchorWeight}
        />
      )}
      {recipe.butterBlock && (
        <ButterBlockPanel
          butterBlock={recipe.butterBlock}
          detrempeFlourWeight={recipe.defaultAnchorWeight}
        />
      )}
      <InstructionsPanel recipe={recipe} />
    </div>
  );
}
