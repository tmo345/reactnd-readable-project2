// @flow

import moment from 'moment';
import type { PostState, CategoryName, CategoryState, CommentState } from 'store-types';
import type { PostAction, SetActiveCategory, CommentAction } from 'action-types';
import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

const initialPosts: PostState = {
  byId: {},
  allIds: []
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


export const categories: Reducer<CategoryState, SetActiveCategory> = (state: CategoryState = initialCategories, action: SetActiveCategory) => {
  switch(action.type) {
    case 'SET_ACTIVE_CATEGORY':
      const currentActive = (state.filter((category) => category.active))[0]
      const targetCategory: CategoryName = action.name;
      if (currentActive.name === targetCategory) {
        return state;
      }
      return (state.map((category) => {
        if (category.name === action.name || category.active) {
          return { ...category,
            active: !category.active
          }
        } else {
          return category
        }
      }))

    default:
      return state
  }
}

export const posts: Reducer<PostState, PostAction> = (state: PostState = initialPosts, action: PostAction) => {
  switch(action.type) {

    case 'HYDRATE_POSTS':
      {
        const postIds = action.posts.map((post) => post.id)
        const byIdObject = action.posts.reduce((acc, currentPost) => {
          acc[currentPost.id] = currentPost
          console.log(acc)
          return acc;
        }, {})
        return {
          byId: byIdObject,
          allIds: postIds
        }
      }
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
        // In case remainingIds is empty to avoid assigning undefined as property of byId.
        // An example would be where there is one post and you delete it, resulting in
        // remainingIds = [].
        if (currentId) {
          byId[currentId] = state.byId[currentId];
        }
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

const comments: Reducer<CommentState, CommentAction> =
  (state: CommentState = { byId: {}, allIds: [] }, action: CommentAction) => {
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
