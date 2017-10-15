export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export const setActiveCategory = category => {
  // If no category name passed in set categoryName to all
  const categoryName = category || 'all';
  return {
    type: SET_ACTIVE_CATEGORY,
    categoryName,
  };
};
