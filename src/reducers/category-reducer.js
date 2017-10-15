import { SET_ACTIVE_CATEGORY } from '../actions/category-actions';

export const initialCategoryState = {
  active: 'all',
  categories: [
    {
      name: 'all',
      path: '/',
    },
    {
      name: 'udacity',
      path: 'udacity',
    },
    {
      name: 'react',
      path: 'react',
    },
    {
      name: 'redux',
      path: 'redux',
    },
  ],
};

const categories = (state = initialCategoryState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        active: action.categoryName,
      };

    default:
      return state;
  }
};

export default categories;
