// @flow
/**
 * Note: Using string literals for action types instead of constants
 * because flow can enforce the type as the exact string literal.
 */
import type { CategoryName } from 'store-types';

declare module 'action-types' {

  declare type AddPostData = {
    title: string,
    body: string,
    author: string,
    category: string
  };

  declare type EditPostData = {
    id: string,
    title: string,
    body: string
  };

  declare type SetActiveCategory = {
    type: 'SET_ACTIVE_CATEGORY',
    name: CategoryName
  }

  declare type UpVotePost = {
    type: 'UP_VOTE_POST',
    id: string
  };

  declare type DownVotePost = {
    type: 'DOWN_VOTE_POST',
    id: string
  };

  declare type UpVoteComment = {
    type: 'UP_VOTE_COMMENT',
    id: string
  };

  declare type DownVoteComment = {|
    type: 'DOWN_VOTE_COMMENT',
    id: string
  |};

  declare type AddPost = {
    type: 'ADD_POST',
    id: string,
    timestamp: number,
    title: string,
    body: string,
    author: string,
    category: string,
    voteScore: number
  }

  declare type EditPost = {
    type: 'EDIT_POST',
    id: string,
    title: string,
    body: string
  }

  declare type DeletePost = {
    type: 'DELETE_POST',
    id: string
  }

  declare type AddComment = {
    type: 'ADD_COMMENT',
    id: string,
    timestamp: number,
    body: string,
    author: string,
    parentId: string,
    voteScore: number
  }

  declare type EditComment = {
    type: 'EDIT_COMMENT',
    id: string,
    timestamp: number,
    body: string
  }

  declare type DeleteComment = {
    type: 'DELETE_COMMENT',
    id: string
  }

  declare type PostAction =
    | AddPost
    | EditPost
    | DeletePost
    | UpVotePost
    | DownVotePost

  declare type CommentAction =
    | AddComment
    | EditComment
    | DeleteComment
    | UpVoteComment
    | DownVoteComment

  declare type Action =
    | SetActiveCategory
    | PostAction
    | CommentAction
}
