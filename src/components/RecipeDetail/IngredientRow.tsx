import { useState, useEffect, useRef } from 'react';
import type { IngredientDef } from '../../types/recipe';
import clsx from 'clsx';
import styles from './IngredientRow.module.css';

interface IngredientRowProps {
  ingredient: IngredientDef;
  weight: number;
  isAdjusted: boolean;
  onChange: (id: string, weight: number) => void;
}

export function IngredientRow({
  ingredient,
  weight,
  isAdjusted,
  onChange,
}: IngredientRowProps) {
  const [localValue, setLocalValue] = useState(weight.toString());
  const [flash, setFlash] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync local value when weight changes externally (another ingredient was modified)
  useEffect(() => {
    setLocalValue(weight.toString());
    // Trigger flash animation
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 600);
    return () => clearTimeout(timer);
  }, [weight]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setLocalValue(raw);
  };

  const handleBlur = () => {
    const parsed = parseFloat(localValue);
    if (!isNaN(parsed) && parsed > 0) {
      onChange(ingredient.id, parsed);
    } else {
      // Revert to current weight
      setLocalValue(weight.toString());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    }
  };

  const displayWeight = ingredient.percentage <= 2
    ? weight.toFixed(1)
    : weight.toString();

  return (
    <div
      className={clsx(
        styles.row,
        isAdjusted && styles.adjusted,
        ingredient.isFlour && styles.isFlour,
        flash && styles.flash
      )}
    >
      <div className={styles.nameCol}>
        <span className={styles.name}>{ingredient.nameZh}</span>
        {ingredient.isFlour && (
          <span className={styles.flourTag}>面粉</span>
        )}
      </div>

      <span className={styles.percentage}>
        {ingredient.percentage}%
      </span>

      <div className={styles.inputCol}>
        <input
          ref={inputRef}
          type="number"
          className={styles.input}
          value={localValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          inputMode="decimal"
          min="0"
          step="any"
        />
        <span className={styles.unit}>g</span>
      </div>

      <span className={styles.displayWeight}>
        {displayWeight}g
      </span>
    </div>
  );
}
