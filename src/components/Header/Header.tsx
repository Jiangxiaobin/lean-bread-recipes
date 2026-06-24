import { BackButton } from '../common/BackButton';
import styles from './Header.module.css';

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
}

export function Header({ showBack = false, onBack }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          {showBack && onBack && <BackButton onClick={onBack} />}
        </div>
        <div className={styles.center}>
          <h1 className={styles.title}>
            <span className={styles.icon}>🥖</span>
            <span className={styles.titleText}>硬欧食谱</span>
          </h1>
          <p className={styles.subtitle}>Lean Bread Recipes</p>
        </div>
        <div className={styles.right} />
      </div>
    </header>
  );
}
