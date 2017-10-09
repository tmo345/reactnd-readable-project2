import {
  OPEN_ADD_POST_MODAL,
  OPEN_EDIT_POST_MODAL,
  OPEN_DELETE_POST_MODAL,
  CLOSE_ADD_POST_MODAL,
  CLOSE_EDIT_POST_MODAL,
  CLOSE_DELETE_POST_MODAL,
  OPEN_ADD_COMMENT_MODAL,
  OPEN_EDIT_COMMENT_MODAL,
  OPEN_DELETE_COMMENT_MODAL,
  CLOSE_ADD_COMMENT_MODAL,
  CLOSE_EDIT_COMMENT_MODAL,
  CLOSE_DELETE_COMMENT_MODAL,
} from '../../actions/ui/modal';

const initialUiModals = {
  addPostModalOpen: false,
  editPostModalOpen: false,
  deletePostModalOpen: false,
};

const modals = (state = initialUiModals, action) => {
  switch (action.type) {
    case OPEN_ADD_POST_MODAL:
      return {
        ...state,
        addPostModalOpen: true,
      };

    case CLOSE_ADD_POST_MODAL:
      return {
        ...state,
        addPostModalOpen: false,
      };

    case OPEN_EDIT_POST_MODAL:
      return {
        ...state,
        editPostModalOpen: true,
      };

    case CLOSE_EDIT_POST_MODAL:
      return {
        ...state,
        editPostModalOpen: false,
      };

    case OPEN_DELETE_POST_MODAL:
      return {
        ...state,
        deletePostModalOpen: true,
      };

    case CLOSE_DELETE_POST_MODAL:
      return {
        ...state,
        deletePostModalOpen: false,
      };

    case OPEN_ADD_COMMENT_MODAL:
      return {
        ...state,
        addCommentModalOpen: true,
      };

    case CLOSE_ADD_COMMENT_MODAL:
      return {
        ...state,
        addCommentModalOpen: false,
      };

    case OPEN_EDIT_COMMENT_MODAL:
      return {
        ...state,
        editCommentModalOpen: true,
      };

    case CLOSE_EDIT_COMMENT_MODAL:
      return {
        ...state,
        editCommentModalOpen: false,
      };

    case OPEN_DELETE_COMMENT_MODAL:
      return {
        ...state,
        deleteCommentModalOpen: true,
      };

    case CLOSE_DELETE_COMMENT_MODAL:
      return {
        ...state,
        deleteCommentModalOpen: false,
      };

    default:
      return state;
  }
};

export default modals;
