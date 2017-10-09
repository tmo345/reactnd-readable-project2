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

    default:
      return state;
  }
};

export default votes;
