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
  editPostModal: {
    isOpen: false,
    forPostId: '',
  },
  deletePostModal: {
    isOpen: false,
    forPostId: '',
  },
  addCommentModalOpen: false,
  editCommentModal: {
    isOpen: false,
    forCommentId: '',
    parentId: '',
  },
  deleteCommentModal: {
    isOpen: false,
    forCommentId: '',
  },
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
        editPostModal: {
          isOpen: true,
          forPostId: action.postId,
        },
      };

    case CLOSE_EDIT_POST_MODAL:
      return {
        ...state,
        editPostModal: {
          isOpen: false,
          forPostId: '',
        },
      };

    case OPEN_DELETE_POST_MODAL:
      return {
        ...state,
        deletePostModal: {
          isOpen: true,
          forPostId: action.postId,
        },
      };

    case CLOSE_DELETE_POST_MODAL:
      return {
        ...state,
        deletePostModal: {
          isOpen: false,
          forPostId: '',
        },
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
        editCommentModal: {
          isOpen: true,
          forCommentId: action.id,
          parentId: action.parentId,
        },
      };

    case CLOSE_EDIT_COMMENT_MODAL:
      return {
        ...state,
        editCommentModal: {
          isOpen: false,
          forCommentId: '',
          parentId: '',
        },
      };

    case OPEN_DELETE_COMMENT_MODAL:
      return {
        ...state,
        deleteCommentModal: {
          isOpen: true,
          forCommentId: action.id,
        },
      };

    case CLOSE_DELETE_COMMENT_MODAL:
      return {
        ...state,
        deleteCommentModal: {
          isOpen: false,
          forCommentId: '',
        },
      };

    default:
      return state;
  }
};

export default modals;
