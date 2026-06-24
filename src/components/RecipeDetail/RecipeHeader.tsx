import type { Recipe } from '../../types/recipe';
import { getCategoryInfo } from '../../data/categories';
import { Badge } from '../common/Badge';
import { HydrationGauge } from './HydrationGauge';
import styles from './RecipeHeader.module.css';

interface RecipeHeaderProps {
  recipe: Recipe;
}

export function RecipeHeader({ recipe }: RecipeHeaderProps) {
  const catInfo = getCategoryInfo(recipe.category);

  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.titles}>
          <h2 className={styles.name}>{recipe.nameZh}</h2>
          <p className={styles.enName}>{recipe.name}</p>
        </div>
        <HydrationGauge hydration={recipe.hydration} />
      </div>

      <div className={styles.meta}>
        <Badge label={catInfo.nameZh} color={catInfo.color} size="md" />
        {recipe.preferment && (
          <Badge label={`含${recipe.preferment.nameZh}`} size="md" />
        )}
        <Badge label={`${recipe.defaultFlourWeight}g 面粉`} size="md" />
      </div>

      <p className={styles.description}>{recipe.descriptionZh}</p>
    </div>
  );
}
