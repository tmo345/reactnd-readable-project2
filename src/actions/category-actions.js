export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export const setActiveCategory = name => {
  const categoryName = name || 'all';
  return {
    type: SET_ACTIVE_CATEGORY,
    categoryName,
  };
};
