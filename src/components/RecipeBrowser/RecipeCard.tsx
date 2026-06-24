import type { Recipe } from '../../types/recipe';
import { getCategoryInfo } from '../../data/categories';
import { Badge } from '../common/Badge';
import styles from './RecipeCard.module.css';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

function getHydrationLabel(hydration: number): string {
  if (hydration >= 80) return '超高水量';
  if (hydration >= 72) return '高水量';
  if (hydration >= 65) return '中水量';
  return '低水量';
}

function formatTime(minutes: number): string {
  if (minutes >= 1440) {
    const d = Math.floor(minutes / 1440);
    const h = Math.floor((minutes % 1440) / 60);
    return h > 0 ? `${d}d ${h}h` : `${d}d`;
  }
  if (minutes >= 60) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  return `${minutes}min`;
}

const difficultyLabels: Record<string, string> = {
  beginner: '入门',
  intermediate: '进阶',
  advanced: '大师',
};

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const catInfo = getCategoryInfo(recipe.category);

  return (
    <button className={styles.card} onClick={onClick}>
      <div className={styles.visual}>
        <span className={styles.emoji}>{catInfo.icon || '🍞'}</span>
        <div className={styles.badges}>
          {recipe.hydration && (
            <Badge
              label={getHydrationLabel(recipe.hydration)}
              color="var(--color-accent)"
            />
          )}
          {recipe.preferment && <Badge label={recipe.preferment.nameZh} />}
          <Badge label={difficultyLabels[recipe.difficulty]} />
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{recipe.nameZh}</h3>
        <p className={styles.enName}>{recipe.name}</p>
        <div className={styles.meta}>
          <span className={styles.metaItem} style={{ color: catInfo.color }}>
            {catInfo.nameZh}
          </span>
          <span className={styles.metaItem}>⏱ {formatTime(recipe.totalTime)}</span>
        </div>
        {recipe.hydration && (
          <span className={styles.hydration}>{recipe.hydration}% 水量</span>
        )}
      </div>
    </button>
  );
}
