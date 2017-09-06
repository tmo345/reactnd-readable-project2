// @flow
const uuidv4 = require('uuid/v4');

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

export type UpVotePost = { type: 'UP_VOTE_POST', id: string }
export type DownVotePost = { type: 'DOWN_VOTE_POST', id: string }
export type UpVoteComment = { type: 'UP_VOTE_COMMENT', id: string }
export type DownVoteComment = { type: 'DOWN_VOTE_COMMENT', id: string }

export type AddPost = {|
  type: typeof ADD_POST,
  postInfo: {
    id: string,
    timestamp: number,
    title: string,
    body: string,
    author: string,
    category: string,
    votedScore: number
  }
|}

export type EditPost = {|
  type: typeof EDIT_POST,
  postInfo: {
    id: string,
    title: string,
    body: string
  }
|}

export type DeletePost = {|
  type: typeof DELETE_POST,
  postInfo: {
    id: string
  }
|}

export type PostAction =
  | AddPost
  | EditPost
  | DeletePost;
  
export type AddComment = {
  type: typeof ADD_COMMENT,
  id: string,
  timestamp: number,
  body: string,
  author: string,
  parentId: string
}

export type EditComment = {
  type: typeof EDIT_COMMENT,
  timestamp: number,
  body: string
}

export type DeleteComment = {
  type: typeof DELETE_COMMENT,
  id: string
}

export type Action =
  | UpVotePost
  | DownVotePost
  | UpVoteComment
  | DownVoteComment
  | AddPost
  | EditPost
  | DeletePost
  | AddComment
  | EditComment
  | DeleteComment;

export function upVotePost(id: string): UpVotePost {
  return {
    type: UP_VOTE_POST,
    id
  }
}

export function downVotePost(id: string): DownVotePost {
  return {
    type: DOWN_VOTE_POST,
    id
  }
}

export function upVoteComment(id: string): UpVoteComment {
  return {
    type: UP_VOTE_COMMENT,
    id
  }
}

export function downVoteComment(id: string): DownVoteComment {
  return {
    type: DOWN_VOTE_COMMENT,
    id
  }
}

export function addPost(
  {title, body, author, category}:
  {title: string, body: string, author: string, category: string}
): AddPost {
  return {
    type: ADD_POST,
    postInfo: {
      id: uuidv4(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
      votedScore: 1
    }
  }
}

export function editPost(id: string, title: string, body: string): EditPost {
  return {
    type: EDIT_POST,
    postInfo: {
      id,
      title,
      body
    }
  }
}

export function deletePost(id: string): DeletePost {
  return {
    type: DELETE_POST,
    postInfo: {
      id
    }
  }
}

export function addComment(id: string, timestamp: number, body: string, author: string, parentId: string ): AddComment {
  return {
    type: ADD_COMMENT,
    id,
    timestamp,
    body,
    author,
    parentId
  }
}

export function editComment(id: string, timestamp: number, body: string ): EditComment {
  return {
    type: EDIT_COMMENT,
    timestamp,
    body
  }
}

export function deleteComment(id: string): DeleteComment {
  return {
    type: DELETE_COMMENT,
    id
  }
}
