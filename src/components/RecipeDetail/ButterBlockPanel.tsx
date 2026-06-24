import type { ButterBlock } from '../../types/recipe';
import styles from './ButterBlockPanel.module.css';

interface ButterBlockPanelProps {
  butterBlock: ButterBlock;
  detrempeFlourWeight: number;
}

export function ButterBlockPanel({
  butterBlock,
  detrempeFlourWeight,
}: ButterBlockPanelProps) {
  const blockWeight = Math.round(
    (butterBlock.percentageOfDetrempe / 100) * detrempeFlourWeight
  );

  return (
    <section className={styles.panel}>
      <h3 className={styles.heading}>🧈 裹入黄油层 (Butter Block)</h3>
      <p className={styles.desc}>
        酥皮面包的核心——将黄油块包裹在基础面团中，通过多次折叠形成数百层酥脆层次。
      </p>

      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.label}>黄油层总重</span>
          <span className={styles.value}>{blockWeight}g</span>
          <span className={styles.meta}>
            占基础面团面粉的 {butterBlock.percentageOfDetrempe}%
          </span>
        </div>
        {butterBlock.ingredients.map((ing) => (
          <div key={ing.id} className={styles.item}>
            <span className={styles.label}>{ing.nameZh}</span>
            <span className={styles.value}>{ing.percentage}%</span>
          </div>
        ))}
      </div>

      <div className={styles.instructions}>
        <p>{butterBlock.instructionsZh}</p>
      </div>
    </section>
  );
}
