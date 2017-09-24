// @flow

import type {
  CategoryState,
  CategoryAction
} from '../types/category-types';

const initialCategoryState: CategoryState = [
  {
    name: 'all',
    path: '/',
    active: true
  },
  {
    name: 'udacity',
    path: 'udacity',
    active: false
  },
  {
    name: 'react',
    path: 'react',
    active: false
  },
  {
    name: 'redux',
    path: 'redux',
    active: false
  },
];

const categories = (state: CategoryState = initialCategoryState, action: CategoryAction): CategoryState => {
  switch(action.type) {
    case 'SET_ACTIVE_CATEGORY':
      const currentActive = (state.filter((category) => category.active))[0]
        const targetCategory: CategoryName = action.name;
        if (currentActive.name === targetCategory) {
          return state;
        }
        return (state.map((category) => {
          if (category.name === action.name || category.active) {
            return { ...category,
              active: !category.active
            }
          } else {
            return category
          }
        }))

      default:
        return state;
  }
}

export default categories;
