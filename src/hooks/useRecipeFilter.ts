import { useMemo, useState } from 'react';
import { type Recipe, RecipeCategory } from '../types/recipe';

export function useRecipeFilter(recipes: Recipe[]) {
  const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'all'>('all');

  const filteredRecipes = useMemo(() => {
    if (activeCategory === 'all') return recipes;
    return recipes.filter((r) => r.category === activeCategory);
  }, [recipes, activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredRecipes,
  };
}
