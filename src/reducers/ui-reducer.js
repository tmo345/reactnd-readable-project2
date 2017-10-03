const initialUiState = {
  postsLoading: false,
  addPostModalOpen: false,
  processingNewPost: false,
  addPostFormSubmitted: false,
  processingVotes: {
    posts: [],
    comments: []
  }
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

    case 'ADD_POST_SERVER_SUCCESS':
      return {
        ...state,
        processingNewPost: false,
        addPostFormSubmitted: true
      };

    case 'ADD_POST_SERVER_STARTED':
      return {
        ...state,
        processingNewPost: true
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

    case 'RESET_ADD_POST_FORM_SUBMITTED':
      return {
        ...state,
        addPostFormSubmitted: false
      };

    case 'VOTE_FOR_POST_STARTED':
      return {
        ...state,
        processingVotes: {
          ...state.processingVotes,
          posts: [...state.processingVotes.posts, action.id]
        }
      };

    case 'VOTE_FOR_POST_SUCCEEDED': {
      const indexToRemove = state.processingVotes.posts.indexOf(action.id);
      return {
        ...state,
        processingVotes: {
          ...state.processingVotes,
          posts: [
            ...state.processingVotes.posts.slice(0, indexToRemove),
            ...state.processingVotes.posts.slice(indexToRemove + 1)
          ]
        }
      };
    }

    default:
      return state;
  }
};

export default ui;
