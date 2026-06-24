import type { Recipe } from '../../types/recipe';
import { getCategoryInfo } from '../../data/categories';
import { Badge } from '../common/Badge';
import styles from './RecipeCard.module.css';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

function getHydrationLabel(hydration: number): string {
  if (hydration >= 78) return '超高水量';
  if (hydration >= 72) return '高水量';
  if (hydration >= 65) return '中水量';
  return '低水量';
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const catInfo = getCategoryInfo(recipe.category);

  return (
    <button className={styles.card} onClick={onClick}>
      <div className={styles.visual}>
        <span className={styles.emoji}>🍞</span>
        <div className={styles.badges}>
          <Badge label={getHydrationLabel(recipe.hydration)} color="var(--color-accent)" />
          {recipe.preferment && <Badge label={recipe.preferment.nameZh} />}
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{recipe.nameZh}</h3>
        <p className={styles.enName}>{recipe.name}</p>
        <div className={styles.meta}>
          <span className={styles.metaItem} style={{ color: catInfo.color }}>
            {catInfo.nameZh}
          </span>
          <span className={styles.metaItem}>
            {recipe.hydration}% 水量
          </span>
        </div>
      </div>
    </button>
  );
}
