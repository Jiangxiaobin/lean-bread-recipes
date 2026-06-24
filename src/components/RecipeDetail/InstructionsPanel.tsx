import type { Recipe } from '../../types/recipe';
import { StepItem } from './StepItem';
import styles from './InstructionsPanel.module.css';

interface InstructionsPanelProps {
  recipe: Recipe;
}

export function InstructionsPanel({ recipe }: InstructionsPanelProps) {
  return (
    <section className={styles.panel}>
      <h3 className={styles.heading}>制作步骤</h3>
      <ol className={styles.stepList}>
        {recipe.steps.map((step) => (
          <StepItem key={step.stepNumber} step={step} />
        ))}
      </ol>

      {recipe.tipsZh.length > 0 && (
        <div className={styles.tips}>
          <h4 className={styles.tipsHeading}>💡 烘焙技巧</h4>
          <ul className={styles.tipsList}>
            {recipe.tipsZh.map((tip, i) => (
              <li key={i} className={styles.tipItem}>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
