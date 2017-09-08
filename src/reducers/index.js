// @flow

import { fromJS, Map } from 'immutable';
import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions/constants';
import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions/constants';
import { UP_VOTE_POST, DOWN_VOTE_POST, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT } from '../actions/constants';

// import type { StateJS, StateMap } from './types';
import type { Action } from '../actions/types';

// TODO:
/*  Figure out why flow wizardry is making me keep the following types (Post,
Comment, StateJS, StateMap) in this file. If I move them to another file and
import the types, flow starts complaining about the immutablejs Map methods. 
The methods executewithout any errors despite the flow errors. If I leave 
them  here, flow is happy. My hunch is that this has to do with the return 
type of "any" from the fromJS function and flow is making inferences from the 
types being in the file.
 */


export type Post = {
  id: string,
  timestamp: number,
  title: string,
  body: string,
  author: string,
  category: string,
  voteScore: number
}

export type Comment = {
  id: string,
  parentId: string,
  timestamp: string,
  body: string,
  author: string,
  voteScore: number
}

export type StateJS = {|
  posts: {
    [id: string]: Post
  },
  comments: {
    [id: string]: Comment
  }
|}

export type StateMap = Map<string,(string|number|Post|Comment)>
// Initial application store state
const initalStateJS: StateJS = {
  posts: {
    // TODO: Remove dummy data
    'id1': {
      id: 'id1',
      timestamp: Date.now(),
      title: 'First post',
      body: 'First post content',
      author: 'Author of first post',
      category: 'Category of first post',
      voteScore: 1
    }
  },
  comments: {}
};

// Convert the initialStateJS object to Immutable.Map
const initialStateMap: StateMap = fromJS(initalStateJS);

// Root reducer
export const reducer = (state: StateMap = initialStateMap, action: Action): StateMap => {
    switch(action.type) {
      case ADD_POST:
        { // block scope const declarations
          const { id, timestamp, title, body, author, category, voteScore } = action;
          return state
            .mergeDeepIn(['posts'], Map({
              [id]: { id, timestamp, title, body, author, category, voteScore }
            }));
        }

      case EDIT_POST:
        return state
          .setIn(['posts', action.id, 'title'], action.title)
          .setIn(['posts', action.id, 'body'], action.body);

      case DELETE_POST:
        return state
          .deleteIn(['posts', action.id])

      case UP_VOTE_POST:
        return state
          .updateIn(
            ['posts', action.id, 'voteScore'],
            (score: number) => score + 1
          );

      case DOWN_VOTE_POST:
        return state.updateIn(
          ['posts', action.id, 'voteScore'],
          (score: number ) => score - 1
        );

      case ADD_COMMENT:
        { // Block scope const declarations
          const { id, timestamp, body, author, voteScore, parentId } = action;
          return state.mergeDeepIn(['comments'], Map({
            [id]: { parentId, id, timestamp, body, author, voteScore }
          }));
        }

      case EDIT_COMMENT:
        return state
          .setIn(['comments', action.id, 'body'], action.body)
          .setIn(['comments', action.id, 'timestamp'], action.timestamp)

      case DELETE_COMMENT:
        return state
          .deleteIn(['comments', action.id]);

      case UP_VOTE_COMMENT:
        return state
          .updateIn(
            ['comments', action.id, 'voteScore'],
            (score: number) => score + 1
          );

      case DOWN_VOTE_COMMENT:
        return state
          .updateIn(
            ['comments', action.id, 'voteScore'],
            (score: number) => score - 1
          );


      default:
        return state;
    }
  }
