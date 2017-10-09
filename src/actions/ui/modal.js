export const OPEN_ADD_POST_MODAL = 'OPEN_ADD_POST_MODAL';
export const CLOSE_ADD_POST_MODAL = 'CLOSE_ADD_POST_MODAL';
export const OPEN_EDIT_POST_MODAL = 'OPEN_EDIT_POST_MODAL';
export const CLOSE_EDIT_POST_MODAL = 'CLOSE_EDIT_POST_MODAL';
export const OPEN_DELETE_POST_MODAL = 'OPEN_DELETE_POST_MODAL';
export const CLOSE_DELETE_POST_MODAL = 'CLOSE_DELETE_POST_MODAL';

export const openAddPostModal = () => ({
  type: OPEN_ADD_POST_MODAL,
});

export const closeAddPostModal = () => ({
  type: CLOSE_ADD_POST_MODAL,
});

export const openEditPostModal = () => ({
  type: OPEN_EDIT_POST_MODAL,
});

export const closeEditPostModal = () => ({
  type: CLOSE_EDIT_POST_MODAL,
});

export const openDeletePostModal = () => ({
  type: OPEN_DELETE_POST_MODAL,
});

export const closeDeletePostModal = () => ({
  type: CLOSE_DELETE_POST_MODAL,
});
