import type { Recipe } from '../../types/recipe';
import { BakerSystem } from '../../types/recipe';
import { useIngredientAdjustment } from '../../hooks/useIngredientAdjustment';
import { IngredientRow } from './IngredientRow';
import styles from './AdjustmentPanel.module.css';

interface AdjustmentPanelProps {
  recipe: Recipe;
}

function getHint(bakerSystem: string): string {
  switch (bakerSystem) {
    case BakerSystem.DIRECT_WEIGHT:
      return '各食材独立称量，修改某项不会影响其他食材';
    case BakerSystem.BUTTER_ANCHOR:
      return '以黄油为锚定，修改任意食材重量后其他食材按比例重新计算';
    case BakerSystem.DUAL_ANCHOR:
      return '修改基础面团食材按比例联动；酥皮黄油层独立计算';
    default:
      return '修改任意食材重量，其他食材会自动按烘焙百分比重新计算';
  }
}

export function AdjustmentPanel({ recipe }: AdjustmentPanelProps) {
  const {
    currentAnchorWeight,
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

      <p className={styles.hint}>{getHint(recipe.bakerSystem)}</p>

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
          <span className={styles.summaryLabel}>{recipe.anchorLabelZh}</span>
          <span className={styles.summaryValue}>
            {currentAnchorWeight}{' '}
            <span className={styles.summaryUnit}>g</span>
          </span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>总重量</span>
          <span className={styles.summaryValue}>
            {totalDoughWeight} <span className={styles.summaryUnit}>g</span>
          </span>
        </div>
        {recipe.hydration !== undefined && (
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>含水量</span>
            <span className={styles.summaryValue}>{recipe.hydration}%</span>
          </div>
        )}
      </div>
    </section>
  );
}
