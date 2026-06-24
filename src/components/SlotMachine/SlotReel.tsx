import { useRef, useEffect, useState } from 'react';
import type { Recipe } from '../../types/recipe';
import styles from './SlotReel.module.css';

interface SlotReelProps {
  recipes: readonly Recipe[];
  targetRecipe: Recipe;
  delay: number; // seconds
  onComplete: () => void;
}

const ITEM_HEIGHT = 56; // px per item
const LOOP_COUNT = 4; // how many full cycles before stopping

export function SlotReel({ recipes, targetRecipe, delay, onComplete }: SlotReelProps) {
  const [animating, setAnimating] = useState(false);
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const targetIndex = recipes.findIndex((r) => r.id === targetRecipe.id);
  // Build a long strip: recipes repeated LOOP_COUNT+1 times, ending at target
  const totalItems = recipes.length;
  const finalOffset = LOOP_COUNT * totalItems + (targetIndex >= 0 ? targetIndex : 0);
  const translateY = finalOffset * ITEM_HEIGHT;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleAnimationEnd = () => {
    setDone(true);
    onComplete();
  };

  // Build the reel strip
  const stripItems: Recipe[] = [];
  for (let i = 0; i <= LOOP_COUNT + 1; i++) {
    for (const r of recipes) {
      stripItems.push(r);
    }
  }

  return (
    <div className={styles.reel} ref={containerRef}>
      <div className={styles.window}>
        <div
          className={`${styles.strip} ${animating ? styles.spinning : ''} ${done ? styles.done : ''}`}
          style={{
            '--translate-y': `-${translateY}px`,
            '--delay': `${delay}s`,
            animationDelay: `${delay}s`,
          } as React.CSSProperties}
          onAnimationEnd={handleAnimationEnd}
        >
          {stripItems.map((r, i) => (
            <div key={`${r.id}-${i}`} className={styles.item}>
              <span className={styles.itemEmoji}>
                {r.category === 'lean-bread' ? '🥖' :
                 r.category === 'enriched-bread' ? '🍞' :
                 r.category === 'sweet-bread' ? '🍩' :
                 r.category === 'laminated-pastry' ? '🥐' :
                 r.category === 'cookies-crackers' ? '🍪' :
                 r.category === 'pies-tarts' ? '🥧' : '🎄'}
              </span>
              <span className={styles.itemName}>{r.nameZh}</span>
            </div>
          ))}
        </div>
        {/* Gradient overlays for 3D slot effect */}
        <div className={styles.topGradient} />
        <div className={styles.bottomGradient} />
        {/* Selection indicator */}
        <div className={styles.indicator} />
      </div>
    </div>
  );
}
