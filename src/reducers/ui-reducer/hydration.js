import {
  HYDRATING_POSTS_COMPLETE,
  HYDRATING_COMMENTS_COMPLETE,
} from '../../actions/ui-actions';

/**
 * Tracks whether the initial hydration of posts and comments has completed.
 */

const initialUiHydration = {
  hydratingPostsComplete: false,
  hydratingCommentsComplete: false,
};

const hydration = (state = initialUiHydration, action) => {
  switch (action.type) {
    case HYDRATING_POSTS_COMPLETE:
      return {
        ...state,
        hydratingPostsComplete: true,
      };

    case HYDRATING_COMMENTS_COMPLETE:
      return {
        ...state,
        hydratingCommentsComplete: true,
      };

    default:
      return state;
  }
};

export default hydration;
