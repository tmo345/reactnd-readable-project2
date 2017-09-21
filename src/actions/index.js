// @flow
import type { SetActiveCategory, HydratePosts, SetSortPostByFlag, SetPostsByCategory } from 'action-types';
import type { GetPostsByCategory, FetchPostsById } from 'action-types';
import type { SortFlag, SortDirection, Action, ThunkAction } from 'action-types';
import type { AddComment, EditComment, DeleteComment } from 'action-types';
import type { AddPost, EditPost, DeletePost } from 'action-types';
import type { UpVotePost, DownVotePost, UpVoteComment, DownVoteComment } from 'action-types';
import type { AddPostData, EditPostData } from 'action-types';
import type { CategoryName, Post } from 'store-types';
import { getPost, getPosts, fetchPostsByCategory } from '../utils/api';
import { fetchFromApi } from '../utils/api';
import type { Dispatch } from 'redux';
import type { DispatchWithThunk } from 'action-types';

// For creating unique ids for posts and comments
const uuidv4 = require('uuid/v4');


// Action Creators


export const hydratePosts =
  (posts: Array<Post>): HydratePosts => {
    return {
      type: 'HYDRATE_POSTS',
      posts: posts
    }
  }

export const getAllPosts =
  () => {
    return function( dispatch: Dispatch<Action> ) {
      return fetchFromApi().
        then(
          response => response.json(),
          error => console.log('An error occured.', error)
        )
        .then(posts => dispatch(hydratePosts(posts)))
    }
  }


export const setActiveCategory =
  (name: CategoryName): SetActiveCategory => ({
    type: 'SET_ACTIVE_CATEGORY',
    name: name
  })


export const setPostsByCategory =
  (posts: Array<Post>): SetPostsByCategory => ({
    type: 'SET_POSTS_BY_CATEGORY',
    posts
  })

export const getPostsByCategory =
  (categoryName: CategoryName): GetPostsByCategory => {
    return function ( dispatch: DispatchWithThunk ) {
      dispatch(setActiveCategory(categoryName))
      if (categoryName === 'all') {
        return getPosts()
          .then(posts => dispatch(hydratePosts(posts)))
      } else {

        return fetchPostsByCategory(categoryName)
          .then(posts => dispatch(setPostsByCategory(posts)))
      }
    }
  }

const getPostById = (post: Post) => ({
  type: 'GET_POST_BY_ID',
  post
})

export const fetchPostById =
  (id: string) => {
    return function ( dispatch: DispatchWithThunk ) {
      getPost(id)
        .then(post => dispatch(getPostById(post)))
    }
  }

export const upVotePost =
  (id: string): UpVotePost => ({
    type: 'UP_VOTE_POST',
    id
  });

export const downVotePost =
  (id: string): DownVotePost => ({
    type: 'DOWN_VOTE_POST',
    id
  });

export const setSortPostByFlag =
  (flag: SortFlag , direction: SortDirection): SetSortPostByFlag => ({
    type: 'SET_SORT_POST_FLAG',
    flag,
    direction,
  })

export const upVoteComment =
  (id: string): UpVoteComment => ({
    type: 'UP_VOTE_COMMENT',
    id
  });

export const downVoteComment =
  (id: string): DownVoteComment => ({
    type: 'DOWN_VOTE_COMMENT',
    id
  })

export const addPost =
  ({ title, body, author, category } : AddPostData): AddPost => {
    const uniqueId = `post-${uuidv4()}`;
    return {
      type: 'ADD_POST',
      id: uniqueId,
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
      voteScore: 1
    }
  }


export const editPost =
  ({id, title, body}: EditPostData): EditPost => ({
    type: 'EDIT_POST',
    id,
    title,
    body
  });

export const deletePost =
  (id: string): DeletePost => ({
    type: 'DELETE_POST',
    id
  });

type AddCommentFunc = ({ id: string, timestamp: number, author: string, body: string, voteScore: number, parentId: string}) => AddComment
export const addComment: AddCommentFunc =
  ({ id, timestamp, body, author, parentId, voteScore }) => {
    return {
      type: 'ADD_COMMENT',
      id,
      timestamp,
      body,
      author,
      parentId,
      voteScore
    }
  }

type EditCommentFunc = ({id: string, body: string}) => EditComment
export const editComment: EditCommentFunc =
  ({id, body}) => {
    return {
      type: 'EDIT_COMMENT',
      id,
      timestamp: Date.now(),
      body
    }
  }

type DeletCommentFunc = ({id: string}) => DeleteComment;
export const deleteComment: DeletCommentFunc =
  ({id}) => {
    return {
      type: 'DELETE_COMMENT',
      id
    }
  }
