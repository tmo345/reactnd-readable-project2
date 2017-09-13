// @flow

import { SET_CATEGORIES } from './constants';
import { ADD_POST, EDIT_POST, DELETE_POST } from './constants';
import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './constants';
import { UP_VOTE_POST, DOWN_VOTE_POST, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT } from './constants';

import type { SetCategories, ToggleCategorySelect, SetActiveCategory } from 'action-types';
import type { AddComment, EditComment, DeleteComment } from 'action-types';
import type { AddPost, EditPost, DeletePost } from 'action-types';
import type { UpVotePost, DownVotePost, UpVoteComment, DownVoteComment } from 'action-types';
import type { AddPostData, EditPostData, SetCategoriesData } from 'action-types';

// For creating unique ids for posts and comments
const uuidv4 = require('uuid/v4');


// Types for object arguments to some action creators

// Action Creators
export const setCategories =
  (categories: SetCategoriesData): SetCategories => ({
    type: SET_CATEGORIES,
    categories
  })

export const upVotePost =
  (id: string): UpVotePost => ({
    type: UP_VOTE_POST,
    id
  });

export const downVotePost =
  (id: string): DownVotePost => ({
    type: DOWN_VOTE_POST,
    id
  });

export const upVoteComment =
  (id: string): UpVoteComment => ({
    type: UP_VOTE_COMMENT,
    id
  });

export const downVoteComment =
  (id: string): DownVoteComment => ({
    type: DOWN_VOTE_COMMENT,
    id
  })

export const addPost =
  ({ title, body, author, category } : AddPostData): AddPost => {
    const uniqueId = `post-${uuidv4()}`;
    return {
      type: ADD_POST,
      id: uniqueId,
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
      voteScore: 1
    }
  }


export const editPost =
  ({id, title, body}: EditPostData): EditPost => ({
    type: EDIT_POST,
    id,
    title,
    body
  });

export const deletePost =
  (id: string): DeletePost => ({
    type: DELETE_POST,
    id
  });

type AddCommentFunc = ({ id: string, timestamp: number, author: string, body: string, voteScore: number, parentId: string}) => AddComment
export const addComment: AddCommentFunc =
  ({ id, timestamp, body, author, parentId, voteScore }) => {
    return {
      type: ADD_COMMENT,
      id,
      timestamp,
      body,
      author,
      parentId,
      voteScore
    }
  }

type EditCommentFunc = ({id: string, body: string}) => EditComment
export const editComment: EditCommentFunc =
  ({id, body}) => {
    return {
      type: EDIT_COMMENT,
      id,
      timestamp: Date.now(),
      body
    }
  }

type DeletCommentFunc = ({id: string}) => DeleteComment;
export const deleteComment: DeletCommentFunc =
  ({id}) => {
    return {
      type: DELETE_COMMENT,
      id
    }
  }
