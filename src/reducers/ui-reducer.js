import { getAllPostsStarted } from '../actions/ui-actions';

const initialUiState = {
  postsLoading: false,
  addPostModalOpen: false
};
const ui = (state = initialUiState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_STARTED':
      return {
        postsLoading: true
      };

    case 'GET_ALL_POSTS_SUCCEEDED':
      return {
        ...state,
        postsLoading: false
      };

    case 'TOGGLE_ADD_POST_MODAL':
      return {
        ...state,
        addPostModalOpen: !state.addPostModalOpen
      };

    default:
      return state;
  }
};

export default ui;
