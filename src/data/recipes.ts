import { leanBreads } from './recipes/lean-breads';
import { enrichedBreads } from './recipes/enriched-breads';
import { sweetBreads } from './recipes/sweet-breads';
import { laminatedPastries } from './recipes/laminated-pastries';
import { cookiesCrackers } from './recipes/cookies-crackers';
import { piesTarts } from './recipes/pies-tarts';
import { seasonal } from './recipes/seasonal';

export const recipes = [
  ...leanBreads,
  ...enrichedBreads,
  ...sweetBreads,
  ...laminatedPastries,
  ...cookiesCrackers,
  ...piesTarts,
  ...seasonal,
];
