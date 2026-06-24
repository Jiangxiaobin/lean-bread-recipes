import type { Tangzhong } from '../../types/recipe';
import styles from './TangzhongPanel.module.css';

interface TangzhongPanelProps {
  tangzhong: Tangzhong;
  totalFlourWeight: number;
}

export function TangzhongPanel({
  tangzhong,
  totalFlourWeight,
}: TangzhongPanelProps) {
  const tangzhongFlour = Math.round(
    (tangzhong.flourPercentage / 100) * totalFlourWeight
  );
  const tangzhongWater = Math.round(tangzhongFlour * tangzhong.waterRatio);

  return (
    <section className={styles.panel}>
      <h3 className={styles.heading}>
        🍚 汤种 (Tangzhong / Water Roux)
      </h3>
      <p className={styles.desc}>
        汤种法将部分面粉与水预糊化，使面包更柔软、保湿性更强。
      </p>

      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.label}>面粉</span>
          <span className={styles.value}>
            {tangzhongFlour}g
          </span>
          <span className={styles.meta}>
            (总面粉的 {tangzhong.flourPercentage}%)
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>水</span>
          <span className={styles.value}>
            {tangzhongWater}g
          </span>
          <span className={styles.meta}>
            (粉水比 1:{tangzhong.waterRatio})
          </span>
        </div>
      </div>

      <div className={styles.instructions}>
        <p>{tangzhong.instructionsZh}</p>
      </div>
    </section>
  );
}
