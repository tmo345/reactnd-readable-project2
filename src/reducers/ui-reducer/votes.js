import {
  VOTE_FOR_COMMENT_STARTED,
  VOTE_FOR_COMMENT_SUCCEEDED,
} from '../../actions/comment-actions';

const initialUiVotes = {
  processingPostVotes: [],
  processingCommentVotes: [],
};

const votes = (state = initialUiVotes, action) => {
  switch (action.type) {
    case 'VOTE_FOR_POST_STARTED':
      return {
        ...state,
        processingPostVotes: [...state.processingPostVotes, action.id],
      };

    case 'VOTE_FOR_POST_SUCCEEDED': {
      const indexToRemove = state.processingPostVotes.indexOf(action.id);
      return {
        ...state,
        processingPostVotes: [
          ...state.processingPostVotes.slice(0, indexToRemove),
          ...state.processingPostVotes.slice(indexToRemove + 1),
        ],
      };
    }

    case VOTE_FOR_COMMENT_STARTED:
      return {
        ...state,
        processingCommentVotes: [...state.processingCommentVotes, action.id],
      };

    case 'VOTE_FOR_COMMENT_SUCCEEDED': {
      console.log('commentvote', action.type);
      const indexToRemove = state.processingCommentVotes.indexOf(action.id);
      return {
        ...state,
        processingCommentVotes: [
          ...state.processingCommentVotes.slice(0, indexToRemove),
          ...state.processingCommentVotes.slice(indexToRemove + 1),
        ],
      };
    }

    default:
      return state;
  }
};

export default votes;
