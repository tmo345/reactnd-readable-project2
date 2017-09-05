// @flow
import { combineReducers } from 'redux';

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
  id: string,
  parentId: string,
  timestamp: number,
  body: string,
  author: string,
  votedScore: number,
  deleted: boolean,
  parentDeleted: boolean
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




