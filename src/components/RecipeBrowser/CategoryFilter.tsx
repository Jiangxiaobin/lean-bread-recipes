import clsx from 'clsx';
import { RecipeCategory } from '../../types/recipe';
import { categories } from '../../data/categories';
import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  active: RecipeCategory | 'all';
  onChange: (category: RecipeCategory | 'all') => void;
}

const labelMap: Record<RecipeCategory | 'all', string> = {
  all: '全部',
  [RecipeCategory.HARD_EUROPEAN]: '硬欧',
  [RecipeCategory.BAGUETTE]: '法棍',
  [RecipeCategory.CIABATTA]: '恰巴塔',
  [RecipeCategory.OTHER]: '其他',
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className={styles.wrapper}>
      <button
        className={clsx(styles.pill, active === 'all' && styles.active)}
        onClick={() => onChange('all')}
      >
        全部
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={clsx(styles.pill, active === cat.id && styles.active)}
          style={{
            '--cat-color': cat.color,
          } as React.CSSProperties}
          onClick={() => onChange(cat.id)}
        >
          {labelMap[cat.id]}
        </button>
      ))}
    </div>
  );
}
