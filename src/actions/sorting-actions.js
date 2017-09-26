

import type {
  sortFlag,
  sortDirection,
  SetSortPostByFlag,
  SetSortingData
} from '../types/sorting-types';

export const setSortPostByFlag = ({ flag, direction}: SetSortingData): SetSortPostByFlag => ({
  type: 'SET_SORT_POST_FLAG',
  flag,
  direction
});
