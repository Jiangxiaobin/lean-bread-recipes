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
  [RecipeCategory.LEAN_BREAD]: '瘦面包',
  [RecipeCategory.ENRICHED_BREAD]: '软面包',
  [RecipeCategory.SWEET_BREAD]: '甜面包',
  [RecipeCategory.LAMINATED_PASTRY]: '酥皮',
  [RecipeCategory.COOKIES_CRACKERS]: '饼干',
  [RecipeCategory.PIES_TARTS]: '派与挞',
  [RecipeCategory.SEASONAL]: '节日限定',
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
          style={
            {
              '--cat-color': cat.color,
            } as React.CSSProperties
          }
          onClick={() => onChange(cat.id)}
        >
          {cat.icon} {labelMap[cat.id]}
        </button>
      ))}
    </div>
  );
}
