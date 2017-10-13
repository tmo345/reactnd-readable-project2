const initialSorting = {
  posts: {
    flag: 'voteScore',
    direction: 'descending',
    currentSort: 'voteScore-descending',
  },
  comments: {
    flag: 'voteScore',
    direction: 'descending',
    currentSort: 'voteScore-descending',
  },
};

const sorting = (state = initialSorting, action) => {
  switch (action.type) {
    case 'SET_SORT_POST_FLAG':
      return {
        ...state,
        posts: {
          flag: action.flag,
          direction: action.direction,
          currentSort: `${action.flag}-${action.direction}`,
        },
      };

    case 'SET_SORT_COMMENT_FLAG':
      return {
        ...state,
        comments: {
          flag: action.flag,
          direction: action.direction,
          currentSort: `${action.flag}-${action.direction}`,
        },
      };

    default:
      return state;
  }
};

export default sorting;
