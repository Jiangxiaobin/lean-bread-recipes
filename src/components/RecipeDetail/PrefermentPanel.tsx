import type { Preferment } from '../../types/recipe';
import styles from './PrefermentPanel.module.css';

interface PrefermentPanelProps {
  preferment: Preferment;
}

export function PrefermentPanel({ preferment }: PrefermentPanelProps) {
  return (
    <section className={styles.panel}>
      <div className={styles.head}>
        <h3 className={styles.name}>
          {preferment.nameZh} <span className={styles.enName}>({preferment.name})</span>
        </h3>
        <p className={styles.desc}>{preferment.description}</p>
      </div>

      <div className={styles.ingredients}>
        <h4 className={styles.subHeading}>酵种配方</h4>
        <div className={styles.ingGrid}>
          {preferment.ingredients.map((ing) => (
            <div key={ing.id} className={styles.ingRow}>
              <span className={styles.ingName}>{ing.nameZh}</span>
              <span className={styles.ingPct}>{ing.percentage}%</span>
            </div>
          ))}
        </div>
        <p className={styles.flourNote}>
          酵种面粉占总面粉的 {preferment.flourPercentageOfTotal}%
        </p>
      </div>

      <div className={styles.instructions}>
        <p className={styles.instZh}>{preferment.instructionsZh}</p>
      </div>
    </section>
  );
}
