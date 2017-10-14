import {
  fetchPosts,
  postPostToServer,
  votePostServer,
  putPostServer,
  deletePostApi,
} from '../utils/api';
import { hydratingPostsComplete } from './ui/hydration';
import uuidv4 from 'uuid/v4';

// Synchronous actions

export const editPost = ({ id, title, body }) => ({
  type: 'EDIT_POST',
  id,
  title,
  body,
});

export const deletePost = id => ({
  type: 'DELETE_POST',
  id,
});

export const upVotePost = id => ({
  type: 'UP_VOTE_POST',
  id,
});

export const downVotePost = id => ({
  type: 'DOWN_VOTE_POST',
  id,
});

export const getAllPostsStarted = () => ({
  type: 'GET_ALL_POSTS_STARTED',
});

export const getAllPostsSucceeded = posts => ({
  type: 'GET_ALL_POSTS_SUCCEEDED',
  posts,
});

export const addPostServerStarted = () => ({
  type: 'ADD_POST_SERVER_STARTED',
});

export const addPostServerSuccess = post => ({
  type: 'ADD_POST_SERVER_SUCCESS',
  post,
});

export const editPostServerStarted = () => ({
  type: 'EDIT_POST_SERVER_STARTED',
});

export const editPostServerSuccess = post => ({
  type: 'EDIT_POST_SERVER_SUCCESS',
  post,
});

export const deletePostServerStarted = () => ({
  type: 'DELETE_POST_SERVER_STARTED',
});

export const deletePostServerSuccess = id => ({
  type: 'DELETE_POST_SERVER_SUCCESS',
  id,
});

export const voteForPostStarted = id => ({
  type: 'VOTE_FOR_POST_STARTED',
  id,
});

export const voteForPostSucceeded = (post, id) => ({
  type: 'VOTE_FOR_POST_SUCCEEDED',
  post,
  id,
});

// Asynchronous actions
export const getAllPosts = urlId => {
  return function(dispatch) {
    return fetchPosts()
      .then(posts => dispatch(getAllPostsSucceeded(posts)))
      .then(() => dispatch(hydratingPostsComplete()));
  };
};

export const addPostServer = ({ title, body, category, author }) => {
  const uniqueId = `post-${uuidv4()}`;
  const timestamp = Date.now();
  const deleted = false;
  return function(dispatch) {
    dispatch(addPostServerStarted());
    return postPostToServer(
      title,
      uniqueId,
      timestamp,
      body,
      author,
      category,
      deleted,
    ).then(response => {
      dispatch(addPostServerSuccess(response.data));
      return response;
    });
  };
};

export const voteForPost = (post, direction) => {
  return function(dispatch) {
    dispatch(voteForPostStarted(post.id));
    return votePostServer(post.id, direction).then(response => {
      dispatch(voteForPostSucceeded(response.data, post.id));
    });
  };
};

export const editPostServer = ({ id, title, body }) => {
  return function(dispatch) {
    dispatch(editPostServerStarted());

    return putPostServer(id, title, body).then(response => {
      dispatch(editPostServerSuccess(response.data));
    });
  };
};

export const deletePostServer = ({ id }) => {
  return function(dispatch) {
    dispatch(deletePostServerStarted());

    return deletePostApi(id).then(response => {
      dispatch(deletePostServerSuccess(id));
    });
  };
};
