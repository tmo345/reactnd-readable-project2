

import type {
  SetActiveCategory,
  categoryName
 } from '../types/category-types';

export const setActiveCategory = (name: categoryName) => ({
  type: 'SET_ACTIVE_CATEGORY',
  name
})
