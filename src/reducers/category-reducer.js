const initialCategoryState = {
  active: 'all',
  categories: [
    {
      name: 'all',
      path: '/'
    },
    {
      name: 'udacity',
      path: 'udacity'
    },
    {
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    }
  ]
};

const categories = (state = initialCategoryState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        active: action.categoryName
      };
    // const currentActive = state.filter(
    //   category => category.active === true
    // )[0];
    // const targetCategory: categoryName = action.name;
    // if (currentActive.name === targetCategory) {
    //   return state;
    // }
    // return state.map(category => {
    //   if (category.name === action.name || category.active) {
    //     return {
    //       ...category,
    //       active: !category.active
    //     };
    //   } else {
    //     return category;
    //   }
    // });

    default:
      return state;
  }
};

export default categories;
