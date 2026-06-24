import { type CategoryInfo, RecipeCategory } from '../types/recipe';

export const categories: CategoryInfo[] = [
  {
    id: RecipeCategory.HARD_EUROPEAN,
    name: 'Hard European',
    nameZh: '硬欧面包',
    color: 'var(--color-hard-european)',
    description: 'Sourdough-based rustic loaves with deep flavor and open crumb.',
  },
  {
    id: RecipeCategory.BAGUETTE,
    name: 'Baguette',
    nameZh: '法棍',
    color: 'var(--color-baguette)',
    description: 'Crisp, airy French baguettes with a thin, crackling crust.',
  },
  {
    id: RecipeCategory.CIABATTA,
    name: 'Ciabatta',
    nameZh: '恰巴塔',
    color: 'var(--color-ciabatta)',
    description: 'High-hydration Italian bread with an airy, holey crumb.',
  },
  {
    id: RecipeCategory.OTHER,
    name: 'Other Staples',
    nameZh: '其他主食',
    color: 'var(--color-other)',
    description: 'Everyday lean breads from around the world.',
  },
];

export function getCategoryInfo(category: RecipeCategory): CategoryInfo {
  return categories.find((c) => c.id === category)!;
}
