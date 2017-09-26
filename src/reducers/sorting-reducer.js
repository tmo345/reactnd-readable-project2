const initialSorting = {
  flag: 'timestamp',
  direction: 'descending'
};

const sorting = (state = initialSorting, action) => {
  switch (action.type) {
    case 'SET_SORT_POST_FLAG':
      return {
        flag: action.flag,
        direction: action.direction
      };
    default:
      return state;
  }
};

export default sorting;
