// @flow

import { fromJS, Map } from 'immutable';
import { SET_CATEGORIES, TOGGLE_CATEGORY_SELECT, SET_ACTIVE_CATEGORY } from '../actions/constants';
import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions/constants';
import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions/constants';
import { UP_VOTE_POST, DOWN_VOTE_POST, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT } from '../actions/constants';
import moment from 'moment';
import type { StateJS, StateMap } from 'store-types';
import type { Action } from 'action-types';
import { combineReducers } from 'redux';

const initialPosts = {
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

const initialCategoryUI = {
  dropdownOpen: false,
  active: 'udacity'
}


export const categoryUI = (state = initialCategoryUI, action) => {
  switch(action.type) {
    case TOGGLE_CATEGORY_SELECT:
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen
      }
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        active: action.active
      }
    default:
      return state
  }
}

export const posts = (state = initialPosts, action) => {
  switch(action.type) {
    case ADD_POST:
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

    case EDIT_POST:
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

    case DELETE_POST:
      const remainingIds = state.allIds.filter((remainingId) => remainingId !== action.id);
      const remainingPosts = remainingIds.reduce((byId, currentId) => {
        byId[currentId] = state.byId[currentId];
        return byId;
      }, {});

      return {
        byId: remainingPosts,
        allIds: remainingIds
      }

    case UP_VOTE_POST:
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

      case UP_VOTE_POST:
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

      case DOWN_VOTE_POST:
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
const comments = (state = {}, action) => {
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
