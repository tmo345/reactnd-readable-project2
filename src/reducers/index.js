// @flow

import moment from 'moment';
import type { PostState, CategoryName, CategoryState, CommentState, SortingState } from 'store-types';
import type { Action, PostAction, SetActiveCategory, CommentAction } from 'action-types';
import { combineReducers } from 'redux';
import type { Reducer } from 'redux';
import { convertToList } from '../utils/helpers'

const initialPosts: PostState = {}


const initialCategories: CategoryState = [
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

const initialSorting: SortingState = {
  flag: 'voteScore',
  direction: 'descending'
}


export const categories: Reducer<CategoryState, SetActiveCategory>
  = (state: CategoryState = initialCategories, action: SetActiveCategory) => {
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

export const sorting = (state: SortingState = initialSorting, action: Action) => {
  switch(action.type) {
    case 'SET_SORT_POST_FLAG':
      return {
        flag: action.flag,
        direction: action.direction,
      }
    default:
      return state;
  }
}

export const posts: Reducer<PostState, PostAction> = (state: PostState = initialPosts, action: PostAction) => {
  switch(action.type) {

    case 'HYDRATE_POSTS':
      {
        const byIdObject = action.posts.reduce((acc, currentPost) => {
          acc[currentPost.id] = currentPost
          return acc;
        }, {})
        return byIdObject;

      }

    case 'SET_POSTS_BY_CATEGORY':
      return action.posts


    case 'GET_POST_BY_ID':
      return {
        [action.post.id]: action.post,
      }


    case 'ADD_POST':
      { // block scope const declarations
        const { id, timestamp, title, body, author, category, voteScore } = action;
        return {
          ...state,
          [id]: { id, timestamp, title, body, author, category, voteScore }
        }
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
        const postArray = convertToList(state)
        const remainingPosts = postArray.filter((post) => post.id !== id);
        return remainingPosts.reduce((posts, currentPost) => {
          posts[currentPost.id] = currentPost
        }, {})

      }
      //const remainingPosts = remainingIds.reduce((byId, currentId) => {
      //// In case remainingIds is empty to avoid assigning undefined as property of byId.
      //// An example would be where there is one post and you delete it, resulting in
      //// remainingIds = [].
      //if (currentId) {
      //byId[currentId] = state.byId[currentId];
      //}
      //return byId;
      //}, {});

      //return {
      //remainingPosts
      //}

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
  comments,
  sorting
})
