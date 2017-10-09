const initialUiModals = {
  addPostModalOpen: false,
  editPostModalOpen: false,
  deletePostModalOpen: false,
};

const modals = (state = initialUiModals, action) => {
  switch (action.type) {
    case 'OPEN_ADD_POST_MODAL':
      return {
        ...state,
        addPostModalOpen: true,
      };

    case 'CLOSE_ADD_POST_MODAL':
      return {
        ...state,
        addPostModalOpen: false,
      };

    case 'OPEN_EDIT_POST_MODAL':
      return {
        ...state,
        editPostModalOpen: true,
      };

    case 'CLOSE_EDIT_POST_MODAL':
      return {
        ...state,
        editPostModalOpen: false,
      };

    case 'OPEN_DELETE_POST_MODAL':
      return {
        ...state,
        deletePostModalOpen: true,
      };

    case 'CLOSE_DELETE_POST_MODAL':
      return {
        ...state,
        deletePostModalOpen: false,
      };

    default:
      return state;
  }
};

export default modals;
