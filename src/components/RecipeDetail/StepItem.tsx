import type { RecipeStep } from '../../types/recipe';
import styles from './StepItem.module.css';

interface StepItemProps {
  step: RecipeStep;
}

function formatDuration(minutes: number): string {
  if (minutes >= 60) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  return `${minutes}min`;
}

export function StepItem({ step }: StepItemProps) {
  return (
    <li className={styles.step}>
      <div className={styles.number}>{step.stepNumber}</div>
      <div className={styles.content}>
        <p className={styles.instruction}>{step.instructionZh}</p>
        <p className={styles.instructionEn}>{step.instruction}</p>
        <div className={styles.footer}>
          {step.durationMinutes && (
            <span className={styles.duration}>
              ⏱ {formatDuration(step.durationMinutes)}
            </span>
          )}
          {step.tip && (
            <span className={styles.tip}>
              💡 {step.tipZh || step.tip}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
