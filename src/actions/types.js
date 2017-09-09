// @flow
'use strict';
import {
  SET_CATEGORIES,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from './constants'

export type SetCategories = {
  type: typeof SET_CATEGORIES,
  categories: Array<{name: string, path: string}>
}

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
  id: string,
  timestamp: number,
  title: string,
  body: string,
  author: string,
  category: string,
  voteScore: number
|}

export type EditPost = {|
  type: typeof EDIT_POST,
  id: string,
  title: string,
  body: string
|}

export type DeletePost = {|
  type: typeof DELETE_POST,
  id: string
|}

export type AddComment = {
  type: typeof ADD_COMMENT,
  id: string,
  timestamp: number,
  body: string,
  author: string,
  parentId: string,
  voteScore: number
}

export type EditComment = {
  type: typeof EDIT_COMMENT,
  id: string,
  timestamp: number,
  body: string
}

export type DeleteComment = {
  type: typeof DELETE_COMMENT,
  id: string
}

export type Action =
  | SetCategories
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
