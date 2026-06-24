import type { Recipe } from '../../types/recipe';
import { useIngredientAdjustment } from '../../hooks/useIngredientAdjustment';
import { IngredientRow } from './IngredientRow';
import styles from './AdjustmentPanel.module.css';

interface AdjustmentPanelProps {
  recipe: Recipe;
}

export function AdjustmentPanel({ recipe }: AdjustmentPanelProps) {
  const {
    currentFlourWeight,
    currentWeights,
    totalDoughWeight,
    lastAdjustedIngredientId,
    handleIngredientChange,
    handleReset,
  } = useIngredientAdjustment(recipe);

  const hasChanges = lastAdjustedIngredientId !== null;

  return (
    <section className={styles.panel}>
      <div className={styles.headBar}>
        <h3 className={styles.heading}>食材用量</h3>
        {hasChanges && (
          <button className={styles.resetBtn} onClick={handleReset}>
            重置默认
          </button>
        )}
      </div>

      <p className={styles.hint}>
        修改任意食材重量，其他食材会自动按烘焙百分比重新计算
      </p>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <span className={styles.colName}>食材</span>
          <span className={styles.colPct}>%</span>
          <span className={styles.colInput}>调整</span>
          <span className={styles.colResult}>结果</span>
        </div>

        {recipe.ingredients.map((ing) => (
          <IngredientRow
            key={ing.id}
            ingredient={ing}
            weight={currentWeights[ing.id]}
            isAdjusted={lastAdjustedIngredientId === ing.id}
            onChange={handleIngredientChange}
          />
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>总面粉</span>
          <span className={styles.summaryValue}>
            {currentFlourWeight} <span className={styles.summaryUnit}>g</span>
          </span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>总面团</span>
          <span className={styles.summaryValue}>
            {totalDoughWeight} <span className={styles.summaryUnit}>g</span>
          </span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>含水量</span>
          <span className={styles.summaryValue}>
            {recipe.hydration}%
          </span>
        </div>
      </div>
    </section>
  );
}
