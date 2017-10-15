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

export const openEditPostModal = postId => ({
  type: OPEN_EDIT_POST_MODAL,
  postId,
});

export const closeEditPostModal = () => ({
  type: CLOSE_EDIT_POST_MODAL,
});

export const openDeletePostModal = postId => ({
  type: OPEN_DELETE_POST_MODAL,
  postId,
});

export const closeDeletePostModal = () => ({
  type: CLOSE_DELETE_POST_MODAL,
});

export const OPEN_ADD_COMMENT_MODAL = 'OPEN_ADD_COMMENT_MODAL';
export const CLOSE_ADD_COMMENT_MODAL = 'CLOSE_ADD_COMMENT_MODAL';
export const OPEN_EDIT_COMMENT_MODAL = 'OPEN_EDIT_COMMENT_MODAL';
export const CLOSE_EDIT_COMMENT_MODAL = 'CLOSE_EDIT_COMMENT_MODAL';
export const OPEN_DELETE_COMMENT_MODAL = 'OPEN_DELETE_COMMENT_MODAL';
export const CLOSE_DELETE_COMMENT_MODAL = 'CLOSE_DELETE_COMMENT_MODAL';

export const openAddCommentModal = () => ({
  type: OPEN_ADD_COMMENT_MODAL,
});

export const closeAddCommentModal = () => ({
  type: CLOSE_ADD_COMMENT_MODAL,
});

export const openEditCommentModal = (id, parentId) => ({
  type: OPEN_EDIT_COMMENT_MODAL,
  id,
  parentId,
});

export const closeEditCommentModal = () => ({
  type: CLOSE_EDIT_COMMENT_MODAL,
});

export const openDeleteCommentModal = id => ({
  type: OPEN_DELETE_COMMENT_MODAL,
  id,
});

export const closeDeleteCommentModal = () => ({
  type: CLOSE_DELETE_COMMENT_MODAL,
});
