import { stateObjectToArray, stateArraytoObject } from './helpers';
import { VOTE_FOR_COMMENT_SUCCEEDED } from '../actions/comment-actions';

const initialComments = {};

const comments = (state = initialComments, action) => {
  switch (action.type) {
    case 'COMMENT_FETCH_SUCCEEDED': {
      const { commentsByParentId } = action;
      return {
        ...state,
        ...commentsByParentId,
      };
    }

    case 'ADD_COMMENT_SERVER_SUCCEEDED': {
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

    case 'EDIT_COMMENT_SERVER_SUCCESS': {
      console.log(action);
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

    case 'DELETE_COMMENT': {
      const { id } = action;
      const commentArray = stateObjectToArray(state);
      const remainingComments = commentArray.filter(
        comment => comment.id !== id,
      );
      return stateArraytoObject(remainingComments);
    }

    case 'UP_VOTE_COMMENT':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id]['voteScore'] + 1,
        },
      };

    case 'DOWN_VOTE_COMMENT':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id]['voteScore'] - 1,
        },
      };

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
