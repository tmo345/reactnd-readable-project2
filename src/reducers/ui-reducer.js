import { getAllPostsStarted } from '../actions/ui-actions';

const initialUiState = {
  postsLoading: false
};
const ui = (state = initialUiState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_STARTED':
      return {
        postsLoading: true
      };

    case 'GET_ALL_POSTS_SUCCEEDED':
      return {
        postsLoading: false
      };

    default:
      return state;
  }
};

export default ui;
