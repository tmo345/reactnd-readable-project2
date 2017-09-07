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


