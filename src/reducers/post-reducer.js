// @flow

import type {
  PostAction,
  PostState
} from '../types/post-types';
import { stateObjectToArray, stateArraytoObject } from './helpers';

const initialPosts: PostState = {};

const posts = (state: PostState = initialPosts, action: PostAction): PostState => {
  switch(action.type) {

    case 'SET_POSTS_FROM_SERVER':
      return stateArraytoObject(action.posts);

    case 'ADD_POST':
      { // block scope for declarations of action properties
        const { id, timestamp, title, body, author, categoryName, voteScore } = action;
        return {
          ...state,
          [id]: { id, timestamp, title, body, author, categoryName, voteScore }
        };
      }

    case 'EDIT_POST':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          title: action.title,
          body: action.body
        }
      }

    case 'DELETE_POST':
      {
        const { id } = action;
        const postArray = stateObjectToArray(state);
        const remainingPosts = postArray.filter((post: Post) => post.id !== id);
        return stateArraytoObject(remainingPosts);
      }

    case 'UP_VOTE_POST':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id]['voteScore'] + 1
        }
      }

    case 'DOWN_VOTE_POST':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id]['voteScore'] - 1
        }
      }

    default:
      return state;
  }
}

export default posts;
