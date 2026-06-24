import type { Recipe } from '../../types/recipe';
import { getCategoryInfo } from '../../data/categories';
import { Badge } from '../common/Badge';
import { HydrationGauge } from './HydrationGauge';
import styles from './RecipeHeader.module.css';

interface RecipeHeaderProps {
  recipe: Recipe;
}

const difficultyLabels: Record<string, string> = {
  beginner: '入门',
  intermediate: '进阶',
  advanced: '大师',
};

export function RecipeHeader({ recipe }: RecipeHeaderProps) {
  const catInfo = getCategoryInfo(recipe.category);

  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.titles}>
          <h2 className={styles.name}>{recipe.nameZh}</h2>
          <p className={styles.enName}>{recipe.name}</p>
        </div>
        {recipe.hydration !== undefined && (
          <HydrationGauge hydration={recipe.hydration} />
        )}
      </div>

      <div className={styles.meta}>
        <Badge label={catInfo.nameZh} color={catInfo.color} size="md" />
        <Badge
          label={difficultyLabels[recipe.difficulty]}
          size="md"
        />
        {recipe.preferment && (
          <Badge label={`含${recipe.preferment.nameZh}`} size="md" />
        )}
        {recipe.tangzhong && (
          <Badge label="含汤种" size="md" />
        )}
        {recipe.butterBlock && (
          <Badge label="含裹油层" size="md" />
        )}
        <Badge
          label={`${recipe.defaultAnchorWeight}g ${recipe.anchorLabelZh}`}
          size="md"
        />
      </div>

      {/* Enriched metrics bar */}
      {(recipe.fatPercentage || recipe.sugarPercentage || recipe.eggPercentage) && (
        <div className={styles.enrichedBar}>
          {recipe.fatPercentage !== undefined && (
            <span>🧈 油脂 {recipe.fatPercentage}%</span>
          )}
          {recipe.sugarPercentage !== undefined && (
            <span>🍬 糖 {recipe.sugarPercentage}%</span>
          )}
          {recipe.eggPercentage !== undefined && (
            <span>🥚 蛋 {recipe.eggPercentage}%</span>
          )}
        </div>
      )}

      <p className={styles.description}>{recipe.descriptionZh}</p>
    </div>
  );
}
