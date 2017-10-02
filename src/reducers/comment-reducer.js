import { stateObjectToArray, stateArraytoObject } from './helpers';

const initialComments = {};

const comments = (state = initialComments, action) => {
  switch (action.type) {
    case 'COMMENT_FETCH_SUCCEEDED': {
      const { comments } = action;
      const commentsArray = stateObjectToArray(comments);
      return {
        ...state,
        ...comments
      };
    }

    case 'ADD_COMMENT': {
      // block scope destructured action properties
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

    case 'DELETE_COMMENT': {
      // block scope destructured action properties
      const { id } = action;
      const commentArray = stateObjectToArray(state);
      const remainingComments = commentArray.filter(
        comment => comment.id !== id
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
      };

    case 'DOWN_VOTE_COMMENT':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id]['voteScore'] - 1
        }
      };

    default:
      return state;
  }
};

export default comments;
