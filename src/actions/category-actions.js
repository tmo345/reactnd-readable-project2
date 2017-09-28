export const setActiveCategory = name => {
  const categoryName = name || 'all';
  return {
    type: 'SET_ACTIVE_CATEGORY',
    categoryName
  };
};
