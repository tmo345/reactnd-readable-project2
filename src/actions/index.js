// @flow
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';


export function upVotePost({ postId }) {
  return {
    type: UP_VOTE_POST,
    postId
  }
}

export function downVotePost({ postId }) {
  return {
    type: DOWN_VOTE_POST,
    postId
  }
}

export function upVoteComment({ commentId }) {
  return {
    type: UP_VOTE_COMMENT,
    commentId
  }
}

export function downVoteComment({ commentId }) {
  return {
    type: DOWN_VOTE_COMMENT,
    commentId
  }
}

export function addPost({ id, timestamp, title, body, author, category }) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function editPost({ postId, title, body }) {
  return {
    type: EDIT_POST,
    postId,
    title,
    body
  }
}

export function deletePost({ postId }) {
  return {
    type: DELETE_POST,
    postId
  }
}

export function addComment( { id, timestamp, body, author, parentId } ) {
  return {
    type: ADD_COMMENT,
    id,
    timestamp,
    body,
    author,
    parentId
  }
}

export function editComment( { commentId, timestamp, body } ) {
  return {
    type: EDIT_COMMENT,
    timestamp,
    body
  }
}

export function deleteComment( { commentId } ) {
  return {
    type: DELETE_COMMENT,
    commentId
  }
}
