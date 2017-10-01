import { stateObjectToArray, stateArraytoObject } from './helpers';

const initialPosts = {};

const posts = (state = initialPosts, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_SUCCEEDED':
      return stateArraytoObject(action.posts);

    case 'ADD_POST_SERVER_SUCCESS': {
      // block scope for declarations of action properties
      const {
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore
      } = action.post;
      return {
        ...state,
        [id]: { id, timestamp, title, body, author, category, voteScore }
      };
    }

    case 'EDIT_POST':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          title: action.title,
          body: action.body
        }
      };

    case 'DELETE_POST': {
      const { id } = action;
      const postArray = stateObjectToArray(state);
      const remainingPosts = postArray.filter((post: Post) => post.id !== id);
      return stateArraytoObject(remainingPosts);
    }

    case 'UP_VOTE_POST':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id]['voteScore'] + 1
        }
      };

    case 'DOWN_VOTE_POST':
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

export default posts;
