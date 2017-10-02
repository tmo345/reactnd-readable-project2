import { fetchPosts, postPostToServer, votePostServer } from '../utils/api';
import uuidv4 from 'uuid/v4';

// Synchronous actions

export const editPost = ({ id, title, body }) => ({
  type: 'EDIT_POST',
  id,
  title,
  body
});

export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const upVotePost = id => ({
  type: 'UP_VOTE_POST',
  id
});

export const downVotePost = id => ({
  type: 'DOWN_VOTE_POST',
  id
});

export const getAllPostsStarted = () => ({
  type: 'GET_ALL_POSTS_STARTED'
});

export const getAllPostsSucceeded = posts => ({
  type: 'GET_ALL_POSTS_SUCCEEDED',
  posts
});

export const addPostServerStarted = () => ({
  type: 'ADD_POST_SERVER_STARTED'
});

export const addPostServerSuccess = post => ({
  type: 'ADD_POST_SERVER_SUCCESS',
  post
});

export const voteForPostSucceeded = post => ({
  type: 'VOTE_FOR_POST_SUCCEEDED',
  post
});

// Asynchronous actions
export const getAllPosts = urlId => {
  return function(dispatch) {
    dispatch(getAllPostsStarted());
    fetchPosts().then(posts => dispatch(getAllPostsSucceeded(posts)));
  };
};

export const addPostServer = ({ title, body, category, author }) => {
  const uniqueId = `post-${uuidv4()}`;
  const timestamp = Date.now();
  return function(dispatch) {
    dispatch(addPostServerStarted());
    postPostToServer(
      title,
      uniqueId,
      timestamp,
      body,
      author,
      category
    ).then(response => dispatch(addPostServerSuccess(response.data)));
  };
};

export const voteForPost = (id, direction) => {
  return function(dispatch) {
    return votePostServer(id, direction).then(response => {
      dispatch(voteForPostSucceeded(response.data));
    });
  };
};
