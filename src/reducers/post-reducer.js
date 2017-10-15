import { stateObjectToArray, stateArraytoObject } from './helpers';
import {
  GET_ALL_POSTS_SUCCEEDED,
  ADD_POST_SERVER_SUCCESS,
  EDIT_POST_SERVER_SUCCESS,
  DELETE_POST_SERVER_SUCCESS,
  VOTE_FOR_POST_SUCCEEDED,
} from '../actions/post-actions';

const initialPosts = {};

const posts = (state = initialPosts, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCEEDED:
      return stateArraytoObject(
        action.posts.filter(post => post.deleted === false),
      );

    case ADD_POST_SERVER_SUCCESS: {
      const {
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted,
      } = action.post;
      return {
        ...state,
        [id]: {
          id,
          timestamp,
          title,
          body,
          author,
          category,
          voteScore,
          deleted,
        },
      };
    }

    case EDIT_POST_SERVER_SUCCESS:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          title: action.post.title,
          body: action.post.body,
        },
      };

    case DELETE_POST_SERVER_SUCCESS: {
      const { id } = action;
      const postArray = stateObjectToArray(state);
      const remainingPosts = postArray.filter((post: Post) => post.id !== id);
      return stateArraytoObject(remainingPosts);
    }

    case VOTE_FOR_POST_SUCCEEDED:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          voteScore: action.post.voteScore,
        },
      };

    default:
      return state;
  }
};

export default posts;
