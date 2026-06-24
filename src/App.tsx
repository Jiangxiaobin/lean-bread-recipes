import { useState } from 'react';
import type { Recipe } from './types/recipe';
import { recipes } from './data/recipes';
import { Header } from './components/Header/Header';
import { RecipeBrowser } from './components/RecipeBrowser/RecipeBrowser';
import { RecipeDetail } from './components/RecipeDetail/RecipeDetail';
import { SlotMachine } from './components/SlotMachine/SlotMachine';
import styles from './App.module.css';

type AppView =
  | { mode: 'browse' }
  | { mode: 'detail'; recipe: Recipe }
  | { mode: 'slotMachine' };

function App() {
  const [view, setView] = useState<AppView>({ mode: 'browse' });

  const handleSelectRecipe = (recipe: Recipe) =>
    setView({ mode: 'detail', recipe });

  const handleOpenSlotMachine = () => setView({ mode: 'slotMachine' });

  const handleBackToBrowse = () => setView({ mode: 'browse' });

  const showBack = view.mode !== 'browse';

  return (
    <div className={styles.app}>
      <Header showBack={showBack} onBack={handleBackToBrowse} />
      <main className={styles.main}>
        {view.mode === 'browse' && (
          <RecipeBrowser
            recipes={recipes}
            onSelectRecipe={handleSelectRecipe}
            onOpenSlotMachine={handleOpenSlotMachine}
          />
        )}
        {view.mode === 'detail' && (
          <RecipeDetail recipe={view.recipe} />
        )}
        {view.mode === 'slotMachine' && (
          <SlotMachine
            recipes={recipes}
            onClose={handleBackToBrowse}
            onSelectRecipe={handleSelectRecipe}
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
