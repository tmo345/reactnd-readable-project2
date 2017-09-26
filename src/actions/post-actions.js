

import moment from 'moment';
import { fetchPost, fetchPosts, fetchPostsByCategory } from '../utils/api';
import uuidv4 from 'uuid/v4';
import { setActiveCategory } from './category-actions';

import type {
  AddPostData,
  EditPostData,
  Post,
  id,
  PostAction,
  DispatchPostAction,
  SetPostsFromServer,
  AddPost,
  EditPost,
  DeletePost,
  UpVotePost,
  DownVotePost
} from '../types/post-types';
import type { categoryName } from '../types/category-types';

// Synchronous actions
export const setPostsFromServer = (posts: Array<Post>): SetPostsFromServer => ({
  type: 'SET_POSTS_FROM_SERVER',
  posts
});

export const addPost = ({
  title,
  body,
  author,
  category
}: AddPostData): AddPost => {
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

export const editPost = ({ id, title, body }: EditPostData): EditPost => ({
  type: 'EDIT_POST',
  id,
  title,
  body
});

export const deletePost = (id: id): DeletePost => ({
  type: 'DELETE_POST',
  id
});

export const upVotePost = (id: id): UpVotePost => ({
  type: 'UP_VOTE_POST',
  id
});

export const downVotePost = (id: id): DownVotePost => ({
  type: 'DOWN_VOTE_POST',
  id
});

// Asynchronous actions

export const getPostsByCategory = (
  categoryName: categoryName
): DispatchPostAction => {
  return function(dispatch: DispatchPostAction) {
    let fetchPromise;
    if (categoryName === 'all') {
      fetchPosts().then((posts: Array<Post>) =>
        dispatch(setPostsFromServer(posts))
      );
    } else {
      fetchPostsByCategory(categoryName).then((posts: Array<Post>) =>
        dispatch(setPostsFromServer(posts))
      );
    }
  };
};

export const getPostById = (id: id): DispatchPostAction => {
  return function(dispatch: DispatchPostAction) {
    return fetchPost(id).then((post: Post) => {
      // setPostsFromServer expects Array<Post>
      const postInArray: Array<Post> = [post];
      return dispatch(setPostsFromServer(postInArray));
    });
  };
};
