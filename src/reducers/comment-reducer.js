// @flow

import type {
  Comment,
  CommentAction,
  CommentState
} from "../types/comment-types";
import { stateObjectToArray, stateArraytoObject } from "./helpers";

const initialComments: CommentState = {};

const comments = (
  state: CommentState = initialComments,
  action: CommentAction
): CommentState => {
  switch (action.type) {
    case "ADD_COMMENT": { // block scope destructured action properties
      const { id, parentId, timestamp, body, author, voteScore } = action;
      return {
        ...state,
        [id]: {
          id,
          parentId,
          timestamp,
          body,
          author,
          voteScore
        }
      };
    }

    case 'EDIT_COMMENT':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          body: action.body
        }
      };

    case 'DELETE_COMMENT': { // block scope destructured action properties
      const { id } = action;
      const commentArray = stateObjectToArray(state);
      const remainingComments = commentArray.filter(
        (comment: Comment) => comment.id !== id
      );
      return stateArraytoObject(remainingComments);
    }

    case 'UP_VOTE_COMMENT':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id]['voteScore'] + 1
        }
      }

    case 'DOWN_VOTE_COMMENT':
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
};

export default comments;
