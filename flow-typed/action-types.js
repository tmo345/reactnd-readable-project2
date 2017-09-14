// @flow
import {
  SET_CATEGORIES,
  TOGGLE_CATEGORY_SELECT,
  SET_ACTIVE_CATEGORY,
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
} from '../src/actions/constants';
import { List, Map } from 'immutable';

declare module 'action-types' {

  declare type AddPostData = {|
    title: string,
    body: string,
    author: string,
    category: string
  |};

  declare type EditPostData = {|
    id: string,
    title: string,
    body: string
  |};

  declare type SetCategoriesData = List<Map<string, *>>

  declare type SetCategories = {
    type: typeof SET_CATEGORIES,
    categories: List<Map<string,*>>
  }


  declare type SetActiveCategory = {|
    type: typeof SET_ACTIVE_CATEGORY,
    active: string
  |}

  declare type UpVotePost = {|
    type: typeof UP_VOTE_POST,
    id: string
  |};

  declare type DownVotePost = {|
    type: typeof DOWN_VOTE_POST,
    id: string
  |};

  declare type UpVoteComment = {|
    type: typeof UP_VOTE_COMMENT,
    id: string
  |};

  declare type DownVoteComment = {|
    type: typeof DOWN_VOTE_COMMENT,
    id: string
  |};

  declare type AddPost = {|
    type: typeof ADD_POST,
    id: string,
    timestamp: number,
    title: string,
    body: string,
    author: string,
    category: string,
    voteScore: number
  |}

  declare type EditPost = {|
    type: typeof EDIT_POST,
    id: string,
    title: string,
    body: string
  |}

  declare type DeletePost = {|
    type: typeof DELETE_POST,
    id: string
  |}

  declare type AddComment = {
    type: typeof ADD_COMMENT,
    id: string,
    timestamp: number,
    body: string,
    author: string,
    parentId: string,
    voteScore: number
  }

  declare type EditComment = {
    type: typeof EDIT_COMMENT,
    id: string,
    timestamp: number,
    body: string
  }

  declare type DeleteComment = {
    type: typeof DELETE_COMMENT,
    id: string
  }

  declare type Action =
    | SetActiveCategory
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

}
