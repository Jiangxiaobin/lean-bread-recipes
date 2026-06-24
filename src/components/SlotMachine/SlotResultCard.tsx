import type { Recipe } from '../../types/recipe';
import { getCategoryInfo } from '../../data/categories';
import styles from './SlotResultCard.module.css';

interface SlotResultCardProps {
  recipe: Recipe;
  index: number;
  onClick: () => void;
}

const difficultyLabels: Record<string, string> = {
  beginner: '入门',
  intermediate: '进阶',
  advanced: '大师',
};

export function SlotResultCard({ recipe, index, onClick }: SlotResultCardProps) {
  const catInfo = getCategoryInfo(recipe.category);
  const emoji = catInfo.icon || '🍞';

  return (
    <button
      className={styles.card}
      style={{ animationDelay: `${0.3 + index * 0.2}s` } as React.CSSProperties}
      onClick={onClick}
    >
      <div className={styles.emojiRow}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.rankBadge}>#{index + 1}</span>
      </div>
      <h3 className={styles.name}>{recipe.nameZh}</h3>
      <p className={styles.enName}>{recipe.name}</p>
      <div className={styles.meta}>
        <span
          className={styles.catBadge}
          style={{ backgroundColor: catInfo.color }}
        >
          {catInfo.nameZh}
        </span>
        <span className={styles.diffBadge}>
          {difficultyLabels[recipe.difficulty]}
        </span>
        {recipe.hydration && (
          <span className={styles.hydration}>{recipe.hydration}% 水</span>
        )}
      </div>
      <p className={styles.desc}>{recipe.descriptionZh.slice(0, 60)}…</p>
    </button>
  );
}
