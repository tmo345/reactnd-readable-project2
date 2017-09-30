import { getAllPostsStarted } from '../actions/ui-actions';

const initialUiState = {
  postsLoading: false,
  addPostModalOpen: false,
  processingNewPost: false
};
const ui = (state = initialUiState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_STARTED':
      return {
        ...state,
        postsLoading: true
      };

    case 'GET_ALL_POSTS_SUCCEEDED':
      return {
        ...state,
        postsLoading: false
      };

    case 'ADD_POST_SERVER_STARTED':
      return {
        ...state,
        processingNewPost: true
      };

    case 'ADD_POST_SERVER_SUCCESS':
      return {
        ...state,
        processingNewPost: false
      };

    case 'OPEN_ADD_POST_MODAL':
      return {
        ...state,
        addPostModalOpen: true
      };

    case 'CLOSE_ADD_POST_MODAL':
      return {
        ...state,
        addPostModalOpen: false
      };

    default:
      return state;
  }
};

export default ui;
