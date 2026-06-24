import clsx from 'clsx';
import styles from './Badge.module.css';

interface BadgeProps {
  label: string;
  color?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export function Badge({ label, color, className, size = 'sm' }: BadgeProps) {
  return (
    <span
      className={clsx(styles.badge, styles[size], className)}
      style={color ? { backgroundColor: color, color: '#fff' } : undefined}
    >
      {label}
    </span>
  );
}
