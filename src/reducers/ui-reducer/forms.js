import {
  START_ADD_POST_FORM_SUBMITTED,
  RESET_ADD_POST_FORM_SUBMITTED,
  START_EDIT_POST_FORM_SUBMITTED,
  RESET_EDIT_POST_FORM_SUBMITTED,
  START_DELETE_POST_FORM_SUBMITTED,
  RESET_DELETE_POST_FORM_SUBMITTED,
  START_ADD_COMMENT_FORM_SUBMITTED,
  RESET_ADD_COMMENT_FORM_SUBMITTED,
  START_EDIT_COMMENT_FORM_SUBMITTED,
  RESET_EDIT_COMMENT_FORM_SUBMITTED,
  START_DELETE_COMMENT_FORM_SUBMITTED,
  RESET_DELETE_COMMENT_FORM_SUBMITTED,
} from '../../actions/ui/forms';
import {
  ADD_POST_SERVER_STARTED,
  ADD_POST_SERVER_SUCCESS,
  EDIT_POST_SERVER_STARTED,
  EDIT_POST_SERVER_SUCCESS,
  DELETE_POST_SERVER_STARTED,
  DELETE_POST_SERVER_SUCCESS,
} from '../../actions/post-actions';
import {
  ADD_COMMENT_SERVER_STARTED,
  ADD_COMMENT_SERVER_SUCCEEDED,
  EDIT_COMMENT_SERVER_STARTED,
  EDIT_COMMENT_SERVER_SUCCESS,
  DELETE_COMMENT_SERVER_STARTED,
  DELETE_COMMENT_SERVER_SUCCESS,
} from '../../actions/comment-actions';

const initialUiForms = {
  addPostFormSubmitted: false,
  processingNewPost: false,
  editPostFormSubmitted: false,
  processingEditPost: false,
  deletePostFormSubmitted: false,
  processingDeletePost: false,
  addCommentFormSubmitted: false,
  processingNewComment: false,
  editCommentFormSubmitted: false,
  processingEditComment: false,
  deleteCommentFormSubmitted: false,
  processingDeleteComment: false,
};

const forms = (state = initialUiForms, action) => {
  switch (action.type) {
    // Add Post Form
    case START_ADD_POST_FORM_SUBMITTED:
      return {
        ...state,
        addPostFormSubmitted: true,
      };

    case RESET_ADD_POST_FORM_SUBMITTED:
      return {
        ...state,
        addPostFormSubmitted: false,
      };

    case ADD_POST_SERVER_SUCCESS:
      return {
        ...state,
        processingNewPost: false,
      };

    case ADD_POST_SERVER_STARTED:
      return {
        ...state,
        processingNewPost: true,
      };

    // Edit Post Form
    case START_EDIT_POST_FORM_SUBMITTED:
      return {
        ...state,
        editPostFormSubmitted: true,
      };

    case RESET_EDIT_POST_FORM_SUBMITTED:
      return {
        ...state,
        editPostFormSubmitted: false,
      };

    case EDIT_POST_SERVER_STARTED:
      return {
        ...state,
        processingEditPost: true,
      };

    case EDIT_POST_SERVER_SUCCESS:
      return {
        ...state,
        processingEditPost: false,
      };

    // Delete Post Form
    case START_DELETE_POST_FORM_SUBMITTED:
      return {
        ...state,
        deletePostFormSubmitted: true,
      };

    case RESET_DELETE_POST_FORM_SUBMITTED:
      return {
        ...state,
        deletePostFormSubmitted: false,
      };

    case DELETE_POST_SERVER_STARTED:
      return {
        ...state,
        processingDeletePost: true,
      };

    case DELETE_POST_SERVER_SUCCESS:
      return {
        ...state,
        processingDeletePost: false,
      };

    case START_ADD_COMMENT_FORM_SUBMITTED:
      return {
        ...state,
        addCommentFormSubmitted: true,
      };

    case RESET_ADD_COMMENT_FORM_SUBMITTED:
      return {
        ...state,
        addCommentFormSubmitted: false,
      };

    case ADD_COMMENT_SERVER_SUCCEEDED:
      return {
        ...state,
        processingNewComment: false,
      };

    case ADD_COMMENT_SERVER_STARTED:
      return {
        ...state,
        processingNewComment: true,
      };

    // Edit Comment Form
    case START_EDIT_COMMENT_FORM_SUBMITTED:
      return {
        ...state,
        editCommentFormSubmitted: true,
      };

    case RESET_EDIT_COMMENT_FORM_SUBMITTED:
      return {
        ...state,
        editCommentFormSubmitted: false,
      };

    case EDIT_COMMENT_SERVER_STARTED:
      return {
        ...state,
        processingEditComment: true,
      };

    case EDIT_COMMENT_SERVER_SUCCESS:
      return {
        ...state,
        processingEditComment: false,
      };

    // Delete Comment Form
    case START_DELETE_COMMENT_FORM_SUBMITTED:
      return {
        ...state,
        deleteCommentFormSubmitted: true,
      };

    case RESET_DELETE_COMMENT_FORM_SUBMITTED:
      return {
        ...state,
        deleteCommentFormSubmitted: false,
      };

    case DELETE_COMMENT_SERVER_STARTED:
      return {
        ...state,
        processingDeleteComment: true,
      };

    case DELETE_COMMENT_SERVER_SUCCESS:
      return {
        ...state,
        processingDeleteComment: false,
      };

    default:
      return state;
  }
};

export default forms;
