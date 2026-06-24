import { useState, useCallback, useMemo } from 'react';
import type { Recipe } from '../types/recipe';
import {
  calcAllWeights,
  recalculateFromIngredient,
  calcTotalDoughWeight,
} from '../utils/bakerMath';

export function useIngredientAdjustment(recipe: Recipe) {
  const [state, setState] = useState(() => ({
    currentAnchorWeight: recipe.defaultAnchorWeight,
    currentWeights: calcAllWeights(
      recipe.ingredients,
      recipe.defaultAnchorWeight,
      recipe.bakerSystem
    ),
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
      currentAnchorWeight: recipe.defaultAnchorWeight,
      currentWeights: calcAllWeights(
        recipe.ingredients,
        recipe.defaultAnchorWeight,
        recipe.bakerSystem
      ),
      lastAdjustedIngredientId: null,
    });
  }, [recipe]);

  const totalDoughWeight = useMemo(
    () => calcTotalDoughWeight(state.currentWeights),
    [state.currentWeights]
  );

  return {
    currentAnchorWeight: state.currentAnchorWeight,
    currentWeights: state.currentWeights,
    lastAdjustedIngredientId: state.lastAdjustedIngredientId,
    totalDoughWeight,
    handleIngredientChange,
    handleReset,
  };
}
