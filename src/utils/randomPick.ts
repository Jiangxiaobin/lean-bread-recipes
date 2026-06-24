/**
 * Fisher-Yates shuffle + pick N unique elements.
 * Returns a new array — does not mutate the input.
 */
export function pickRandom<T>(items: readonly T[], count: number): T[] {
  if (count <= 0) return [];
  if (count >= items.length) {
    // Return a shuffled copy of all items
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Fisher-Yates partial shuffle: only shuffle the first `count` positions
  const result = [...items];
  for (let i = 0; i < count; i++) {
    const j = i + Math.floor(Math.random() * (result.length - i));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result.slice(0, count);
}
