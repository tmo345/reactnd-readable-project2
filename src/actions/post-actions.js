import moment from 'moment';
import { fetchPost, fetchPosts, fetchPostsByCategory } from '../utils/api';
import uuidv4 from 'uuid/v4';
import { getAllPostsStarted } from './ui-actions.js';

// Synchronous actions

export const addPost = ({ title, body, author, category }) => {
  const uniqueId = `post-${uuidv4()}`;
  return {
    type: 'ADD_POST',
    id: uniqueId,
    timestamp: Date.now(),
    voteScore: 1,
    title,
    body,
    author,
    category
  };
};

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

export const getAllPostsSucceeded = posts => ({
  type: 'GET_ALL_POSTS_SUCCEEDED',
  posts
});

// Asynchronous actions
export const getAllPosts = urlId => {
  return function(dispatch) {
    dispatch(getAllPostsStarted());
    fetchPosts().then(posts => dispatch(getAllPostsSucceeded(posts)));
  };
};
