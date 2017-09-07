// @flow
import { combineReducers } from 'redux';
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
  ADD_VOTE_FOR_NEW_POST
} from '../actions'
import type { PostAction, VoteAction, Action } from '../actions';

type Post = {|
  +id: string,
  +timestamp: number,
  +title: string,
  +body: string,
  +author: string,
  +category: string,
  +votedScore: number,
|}

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

type PostState = {|
  byId: {
    [id: string] : Post
  },
  allIds: Array<string>
|}

const initalPostState : PostState = {
  byId: {},
  allIds: []
};

// posts : (PostState, PostAction) -> PostState
const posts = (state : PostState = initalPostState, action: PostAction): PostState => {
  switch (action.type) {
    case ADD_POST:
      { // to block scope the const declarations to this case
        const { id, timestamp, title, body, author, category } = action.postInfo;
        const { votes } = action
        return {
          byId: {
            ...state.byId,
            [id]: {
              id,
              timestamp,
              title,
              body,
              author,
              category,
              votedScore: votes['byId'][id]['votedScore']
            }
          },
          allIds: [
            ...state.allIds,
            id
          ]
        }
      }
    case EDIT_POST:
      {
        const { id, title, body } = action.postInfo;
        return {
          byId: {
            ...state.byId,
            [action.postInfo.id]: {
              ...state.byId[id],
              title,
              body
            }
          },
          allIds: [...state.allIds]
        }
      }
    case DELETE_POST:
      {
        const { id } = action.postInfo;
        // Filter allIds to include all but the id of post to be deleted
        const remainingIds = state.allIds.filter((remainingId) => remainingId !== id);

        // Reduce remainingIds array to build new byId object using the remainingIds as
        // properties and the objects with corresponding ids in state.
        const remainingPosts = remainingIds.reduce((byId, currentId) => {
            byId[currentId] = state['byId'][currentId];
            return byId;
          }, {});

        return {
          byId: remainingPosts,
          allIds: remainingIds
        }
      }
    default:
      return state;
  }
}


 type Vote = {
   id: string,
   votedScore: number
 }

type VoteState = {
  byId: {
    [id: string]: Vote
  },
  allIds: (?string)[]
}

const initialVoteState = {
  byId: {},
  allIds: []
};


const votes = (state: VoteState = initialVoteState, action: VoteAction): VoteState => {
  switch (action.type) {
    case ADD_VOTE_FOR_NEW_POST:
      return {
        byId: {
          ...state.byId,
          [action.id]: {
            id: action.id,
            votedScore: 1
          }
        },
        allIds: [...state.allIds, action.id]
      }
    case UP_VOTE_POST:
      return state;
      // {
      //   ...state,
      //   'posts': {
      //     'byId': {
      //       ...state['posts']['byId'],
      //       [action.id]: {
      //         ...state['posts'][action.id],
      //         'votedScore': state['posts'][action.id]['votedScore'] + 1
      //       }
      //     },
      //     'allIds': [...state['posts']['allIds']]
      //   },
      //   'votes': {
      //     'byId': {
      //       ...state['votes']['byId']
      //     },
      //     'allIds': [...state['votes']['allIds']]
      //   }
      // }

    case DOWN_VOTE_POST:
      return state;

    case UP_VOTE_COMMENT:
      return state;

    case DOWN_VOTE_COMMENT:
      return state;

    default:
      return state;
  }
}

const restReducer = (state = {}, action: Action) => {
  switch (action.type) {




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

// reducer : (State, Action) -> State
export const reducer = combineReducers({
  votes,
  posts,
  restReducer
});
