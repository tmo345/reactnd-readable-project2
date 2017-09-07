// @flow
import { fromJS, Map } from 'immutable';

const uuidv4 = require('uuid/v4');

type State = {
  posts: {
      [id: string]: {
        id: string,
        timestamp: number,
        title: string,
        body: string,
        author: string,
        category: string,
        votedScore: number
      }
  },
  comments: {
      [id: string]: {
        id: string,
        parentId: string,
        timestamp: string,
        body: string,
        author: string,
        votedScore: number
      }
  }
}

const initalStateJS: State = {
  posts: {
  },
  comments: {
  }
};

const initialState: Map<string,*> = fromJS(initalStateJS);


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

export type UpVotePost = {|
  type: typeof UP_VOTE_POST,
  id: string
|};

export type DownVotePost = {|
  type: typeof DOWN_VOTE_POST,
  id: string
|};

export type UpVoteComment = {|
  type: typeof UP_VOTE_COMMENT,
  id: string
|};

export type DownVoteComment = {|
  type: typeof DOWN_VOTE_COMMENT,
  id: string
|};

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

type Action =
  | AddPost
  | EditPost
  | DeletePost
  | UpVotePost
  | DownVotePost
  | UpVoteComment
  | DownVoteComment
  | AddComment
  | EditComment
  | DeleteComment

