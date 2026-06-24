import styles from './HydrationGauge.module.css';

interface HydrationGaugeProps {
  hydration: number;
}

function getLevel(h: number): { label: string; color: string } {
  if (h >= 80) return { label: '超高水量', color: 'var(--color-hydration-high)' };
  if (h >= 72) return { label: '高水量', color: '#c7882e' };
  if (h >= 65) return { label: '中水量', color: 'var(--color-hydration-low)' };
  return { label: '低水量', color: '#8b9a5a' };
}

export function HydrationGauge({ hydration }: HydrationGaugeProps) {
  const level = getLevel(hydration);
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const filled = (hydration / 100) * circumference;
  const unfilled = circumference - filled;

  return (
    <div className={styles.gauge}>
      <svg viewBox="0 0 100 100" className={styles.svg}>
        {/* Background circle */}
        <circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="6"
        />
        {/* Hydration arc */}
        <circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke={level.color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${unfilled}`}
          strokeDashoffset={circumference * 0.25}
          transform="rotate(-90 50 50)"
          className={styles.arc}
        />
        {/* Center text */}
        <text x="50" y="46" textAnchor="middle" className={styles.value}>
          {hydration}%
        </text>
        <text x="50" y="62" textAnchor="middle" className={styles.label}>
          含水量
        </text>
      </svg>
      <span className={styles.levelBadge} style={{ color: level.color }}>
        {level.label}
      </span>
    </div>
  );
}
