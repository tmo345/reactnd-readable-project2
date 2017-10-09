const initialUiForms = {
  addPostFormSubmitted: false,
  processingNewPost: false,
  editPostFormSubmitted: false,
  processingEditPost: false,
  deletePostFormSubmitted: false,
  processingDeletePost: false,
};

const forms = (state = initialUiForms, action) => {
  switch (action.type) {
    // Add Post Form
    case 'START_ADD_POST_FORM_SUBMITTED':
      return {
        ...state,
        addPostFormSubmitted: true,
      };

    case 'RESET_ADD_POST_FORM_SUBMITTED':
      return {
        ...state,
        addPostFormSubmitted: false,
      };

    case 'ADD_POST_SERVER_SUCCESS':
      return {
        ...state,
        processingNewPost: false,
      };

    case 'ADD_POST_SERVER_STARTED':
      return {
        ...state,
        processingNewPost: true,
      };

    // Edit Post Form
    case 'START_EDIT_POST_FORM_SUBMITTED':
      return {
        ...state,
        editPostFormSubmitted: true,
      };

    case 'RESET_EDIT_POST_FORM_SUBMITTED':
      return {
        ...state,
        editPostFormSubmitted: false,
      };

    case 'EDIT_POST_SERVER_STARTED':
      return {
        ...state,
        processingEditPost: true,
      };

    case 'EDIT_POST_SERVER_SUCCESS':
      return {
        ...state,
        processingEditPost: false,
      };

    // Delete Post From
    case 'START_DELETE_POST_FORM_SUBMITTED':
      return {
        ...state,
        deletePostFormSubmitted: true,
      };

    case 'RESET_DELETE_POST_FORM_SUBMITTED':
      return {
        ...state,
        deletePostFormSubmitted: false,
      };

    case 'DELETE_POST_SERVER_STARTED':
      return {
        ...state,
        processingDeletePost: true,
      };

    case 'DELETE_POST_SERVER_SUCCESS':
      return {
        ...state,
        processingDeletePost: false,
      };

    default:
      return state;
  }
};

export default forms;
