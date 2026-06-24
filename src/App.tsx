import { useState } from 'react';
import type { Recipe } from './types/recipe';
import { recipes } from './data/recipes';
import { Header } from './components/Header/Header';
import { RecipeBrowser } from './components/RecipeBrowser/RecipeBrowser';
import { RecipeDetail } from './components/RecipeDetail/RecipeDetail';
import styles from './App.module.css';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className={styles.app}>
      <Header
        showBack={!!selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
      <main className={styles.main}>
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} />
        ) : (
          <RecipeBrowser
            recipes={recipes}
            onSelectRecipe={setSelectedRecipe}
          />
        )}
      </main>
      <footer className={styles.footer}>
        <p>基于烘焙百分比（Baker's Percentages）构建 · 精确到克</p>
      </footer>
    </div>
  );
}

export default App;
