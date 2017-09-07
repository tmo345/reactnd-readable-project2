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

