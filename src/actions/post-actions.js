import moment from 'moment';
import { fetchPost, fetchPosts, fetchPostsByCategory } from '../utils/api';
import uuidv4 from 'uuid/v4';
import { setActiveCategory } from './category-actions';

// Synchronous actions
export const setPostsFromServer = posts => ({
  type: 'SET_POSTS_FROM_SERVER',
  posts
});

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

// Asynchronous actions

export const getPostsByCategory = categoryName => {
  return function(dispatch) {
    let fetchPromise;
    if (categoryName === 'all') {
      fetchPosts().then(posts => dispatch(setPostsFromServer(posts)));
    } else {
      fetchPostsByCategory(categoryName).then(posts =>
        dispatch(setPostsFromServer(posts))
      );
    }
  };
};

export const getPostById = id => {
  return function(dispatch) {
    return fetchPost(id).then(post => {
      // setPostsFromServer expects Array<Post>
      const postInArray = [post];
      return dispatch(setPostsFromServer(postInArray));
    });
  };
};
