// @flow
import { combineReducers } from 'redux';
import {
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions'

type Category = {
  +name: string,
  +path: string
}

type Post = {
  +id: string,
  +timestamp: number,
  +title: string,
  +body: string,
  +author: string,
  +category: string,
  +voteScore: number,
  +deleted: boolean
}

type Comment = {
  +id: string,
  +parentId: string,
  +timestamp: number,
  +body: string,
  +author: string,
  +votedScore: number,
  +deleted: boolean,
  +parentDeleted: boolean
}

type State = {
  +category: {
    [categoryName: string]: Category
  },
  +posts: {
    [postId: string]: Post
  },
  +comments: {
    [commentId: string]: Comment
  }
}




