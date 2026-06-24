import type { Recipe } from '../../types/recipe';
import { useRecipeFilter } from '../../hooks/useRecipeFilter';
import { CategoryFilter } from './CategoryFilter';
import { RecipeCard } from './RecipeCard';
import styles from './RecipeBrowser.module.css';

interface RecipeBrowserProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onOpenSlotMachine: () => void;
}

export function RecipeBrowser({
  recipes,
  onSelectRecipe,
  onOpenSlotMachine,
}: RecipeBrowserProps) {
  const { activeCategory, setActiveCategory, filteredRecipes } =
    useRecipeFilter(recipes);

  return (
    <div className={styles.browser}>
      <div className={styles.heroBar}>
        <div className={styles.heroLeft}>
          <h2 className={styles.browseTitle}>探索配方</h2>
          <p className={styles.browseSub}>Explore Recipes</p>
        </div>
        <button className={styles.slotButton} onClick={onOpenSlotMachine}>
          <span className={styles.slotIcon}>🎰</span>
          <span className={styles.slotLabel}>随机推荐</span>
        </button>
      </div>

      <div className={styles.filterBar}>
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <p className={styles.count}>{filteredRecipes.length} 款食谱</p>
      </div>

      {filteredRecipes.length === 0 ? (
        <div className={styles.empty}>
          <p>该分类暂无食谱</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => onSelectRecipe(recipe)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
