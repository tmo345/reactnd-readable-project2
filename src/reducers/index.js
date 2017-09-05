// @flow
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
  DELETE_COMMENT,
} from '../actions'
import type { Action } from '../actions';

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
  +votedScore: number,
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
    [name: string]: Category
  },
  +posts: {
    [id: string]: Post
  },
  +comments: {
    [id: string]: Comment
  }
}

const initialState = {
  category: {},
  posts: {
    "abcdefg": {
      id: "abcdefg",
      timestamp: 42,
      title: 'title',
      body: 'body',
      author: 'author',
      category: 'category',
      votedScore: 2,
      deleted: false
    }
  },
  comments: {}
}

export default function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    case UP_VOTE_POST:
      const id = action.id;
      return {
        ...state,
        'posts': {
          ...state['posts'],
          [ id ]: {
            ...state['posts'][ id ],
            'votedScore': state['posts'][id]['votedScore'] + 1
          }
        }
      }

    case DOWN_VOTE_POST:
      return state;

    case UP_VOTE_COMMENT:
      return state;

    case DOWN_VOTE_COMMENT:
      return state;

    case ADD_POST:
      return state;

    case EDIT_POST:
      return state;

    case DELETE_POST:
      return state;

    case ADD_COMMENT:
      return state;

    case EDIT_COMMENT:
      return state;

    case DELETE_COMMENT:
      return state;

    default:
      return state;
  }
}

