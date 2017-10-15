import { stateObjectToArray, stateArraytoObject } from './helpers';
import {
  COMMENT_FETCH_SUCCEEDED,
  ADD_COMMENT_SERVER_SUCCEEDED,
  EDIT_COMMENT_SERVER_SUCCESS,
  DELETE_COMMENT_SERVER_SUCCESS,
  VOTE_FOR_COMMENT_SUCCEEDED,
} from '../actions/comment-actions';

const initialComments = {};

const comments = (state = initialComments, action) => {
  switch (action.type) {
    case COMMENT_FETCH_SUCCEEDED: {
      const { commentsByParentId } = action;
      return {
        ...state,
        ...commentsByParentId,
      };
    }

    case ADD_COMMENT_SERVER_SUCCEEDED: {
      const {
        id,
        parentId,
        timestamp,
        body,
        author,
        voteScore,
      } = action.comment;
      return {
        ...state,
        [parentId]: {
          ...state[parentId],
          [id]: {
            id,
            parentId,
            timestamp,
            body,
            author,
            voteScore,
          },
        },
      };
    }

    case EDIT_COMMENT_SERVER_SUCCESS: {
      const { parentId, id, body } = action.comment;
      return {
        ...state,
        [parentId]: {
          ...state[parentId],
          [id]: {
            ...state[parentId][id],
            body,
          },
        },
      };
    }

    case DELETE_COMMENT_SERVER_SUCCESS: {
      const { parentId, id } = action.comment;
      const commentArray = stateObjectToArray(state[parentId]);
      const remainingComments = commentArray.filter(
        comment => comment.id !== id,
      );
      return {
        ...state,
        [parentId]: stateArraytoObject(remainingComments),
      };
    }

    case VOTE_FOR_COMMENT_SUCCEEDED: {
      const { comment: { id, parentId } } = action;
      return {
        ...state,
        [parentId]: {
          ...state[parentId],
          [id]: {
            ...state[parentId][id],
            voteScore: action.comment.voteScore,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default comments;
