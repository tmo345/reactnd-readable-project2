// @flow

import moment from 'moment';
import type { PostState, CategoryName, CategoryState } from 'store-types';
import type { PostAction, SetActiveCategory } from 'action-types';
import { combineReducers } from 'redux';

const initialPosts: PostState = {
  byId: {
    'id1': {
      id: 'id1',
      timestamp: moment(),
      title: 'First post',
      body: 'First post content',
      author: 'Author of first post',
      category: 'Category of first post',
      voteScore: 1
    }
  },
  allIds: ['id1']
}

const initialCategories = [
  {
    name: 'all',
    path: '/',
    active: true
  },
  {
    name: 'udacity',
    path: 'udacity',
    active: false
  },
  {
    name: 'react',
    path: 'react',
    active: false
  },
  {
    name: 'redux',
    path: 'redux',
    active: false
  },
]


export const categories = (state: CategoryState = initialCategories, action: SetActiveCategory) => {
  switch(action.type) {
      }
    default:
      return state
  }
}

export const posts: Reducer<PostState, PostAction> = (state: PostState = initialPosts, action: PostAction) => {
  switch(action.type) {
    case 'ADD_POST':
      { // block scope const declarations
        const { id, timestamp, title, body, author, category, voteScore } = action;
        return {
          byId: {
            ...state.byId,
            [id]: { id, timestamp, title, body, author, category, voteScore }
          },
          allIds: [...state.allIds, id]
        }
      }

    case 'EDIT_POST':
      return {
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            title: action.title,
            body: action.body
          }
        },
        allIds: [...state.allIds]
      }

    case 'DELETE_POST':
      const remainingIds = state.allIds.filter((remainingId) => remainingId !== action.id);
      const remainingPosts = remainingIds.reduce((byId, currentId) => {
        byId[currentId] = state.byId[currentId];
        return byId;
      }, {});

      return {
        byId: remainingPosts,
        allIds: remainingIds
      }

    case 'UP_VOTE_POST':
      return {
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            voteScore: state.byId[action.id]['voteScore'] + 1
          }
        },
        allIds: [...state.allIds]
      }

    case 'DOWN_VOTE_POST':
      return {
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            voteScore: state.byId[action.id]['voteScore'] - 1
          }
        },
        allIds: [...state.allIds]
      }

    default:
      return state
  }
}

// TODO: Implement cases for comments reducer
const comments = (state = { byId: {}, allIds: [] }, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories,
  comments
})
