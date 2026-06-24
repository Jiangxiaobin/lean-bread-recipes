import { useState, useCallback } from 'react';
import type { Recipe } from '../../types/recipe';
import { pickRandom } from '../../utils/randomPick';
import { SlotReel } from './SlotReel';
import { SlotResultCard } from './SlotResultCard';
import styles from './SlotMachine.module.css';

interface SlotMachineProps {
  recipes: readonly Recipe[];
  onClose: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

type SlotPhase = 'idle' | 'spinning' | 'revealing' | 'done';

export function SlotMachine({ recipes, onClose, onSelectRecipe }: SlotMachineProps) {
  const [phase, setPhase] = useState<SlotPhase>('idle');
  const [results, setResults] = useState<Recipe[]>([]);
  const [, setReelsDone] = useState(0);

  const handleSpin = useCallback(() => {
    const picks = pickRandom(recipes, 3);
    setResults(picks);
    setReelsDone(0);
    setPhase('spinning');
  }, [recipes]);

  const handleReelComplete = useCallback(() => {
    setReelsDone((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        // All reels stopped — transition to reveal
        setTimeout(() => setPhase('revealing'), 400);
      }
      return next;
    });
  }, []);

  const handleRevealDone = () => {
    setPhase('done');
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="关闭">
          ✕
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>🎰 今日推荐</h2>
          <p className={styles.subtitle}>为家人和朋友精选三款配方 · Today's Picks</p>
        </div>

        {phase === 'idle' && (
          <div className={styles.idleState}>
            <div className={styles.decorRow}>
              <span>🥖</span><span>🥐</span><span>🍞</span><span>🥨</span><span>🥯</span>
            </div>
            <button className={styles.spinButton} onClick={handleSpin}>
              <span className={styles.spinIcon}>🎰</span>
              <span>开始抽取</span>
              <span className={styles.spinSub}>Spin!</span>
            </button>
            <p className={styles.hint}>随机推荐三款配方，帮你决定今天做什么</p>
          </div>
        )}

        {(phase === 'spinning' || phase === 'revealing' || phase === 'done') && (
          <>
            <div className={styles.reelsRow}>
              {results.map((recipe, i) => (
                <SlotReel
                  key={i}
                  recipes={recipes}
                  targetRecipe={recipe}
                  delay={i * 0.25}
                  onComplete={handleReelComplete}
                />
              ))}
            </div>

            {(phase === 'revealing' || phase === 'done') && (
              <div className={styles.results} onAnimationEnd={handleRevealDone}>
                {results.map((r, i) => (
                  <SlotResultCard
                    key={r.id}
                    recipe={r}
                    index={i}
                    onClick={() => onSelectRecipe(r)}
                  />
                ))}
              </div>
            )}

            {phase === 'done' && (
              <div className={styles.actions}>
                <button className={styles.retryBtn} onClick={handleSpin}>
                  🔄 再抽一次
                </button>
                <button className={styles.backBtn} onClick={onClose}>
                  返回食谱列表
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
