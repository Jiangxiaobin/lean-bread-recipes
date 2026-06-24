import { useState, useCallback, useMemo } from 'react';
import type { Recipe } from '../types/recipe';
import {
  calcAllWeights,
  recalculateFromIngredient,
  calcTotalDoughWeight,
} from '../utils/bakerMath';

export function useIngredientAdjustment(recipe: Recipe) {
  const [state, setState] = useState(() => ({
    currentFlourWeight: recipe.defaultFlourWeight,
    currentWeights: calcAllWeights(recipe.ingredients, recipe.defaultFlourWeight),
    lastAdjustedIngredientId: null as string | null,
  }));

  const handleIngredientChange = useCallback(
    (ingredientId: string, newWeight: number) => {
      if (newWeight <= 0 || isNaN(newWeight)) return;
      setState((prev) => ({
        ...prev,
        ...recalculateFromIngredient(recipe, ingredientId, newWeight),
      }));
    },
    [recipe]
  );

  const handleReset = useCallback(() => {
    setState({
      currentFlourWeight: recipe.defaultFlourWeight,
      currentWeights: calcAllWeights(recipe.ingredients, recipe.defaultFlourWeight),
      lastAdjustedIngredientId: null,
    });
  }, [recipe]);

  const totalDoughWeight = useMemo(
    () => calcTotalDoughWeight(state.currentWeights),
    [state.currentWeights]
  );

  return {
    ...state,
    totalDoughWeight,
    handleIngredientChange,
    handleReset,
  };
}
