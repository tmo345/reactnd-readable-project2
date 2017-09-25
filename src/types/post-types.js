// @flow
import type Moment from 'moment';
import type { categoryName } from './category-types';

// Post part types
export type id = string;
export type timestamp = number;
export type title = string;
export type body = string;
export type author = string;
export type voteScore = number;

// Build the types used for posts as intersection types of all the parts defined above
export type Post = { id: id } & { title: title } & { body: body } & {
    author: author
  } & { category: categoryName } & { voteScore: voteScore } & {
    timestamp: number
  };

export type PostState = {
  // Variable number of Post type Objects with key of the id of the Post
  [id: id]: Post
};

export type AddPostData = { title: title } & { body: body } & {
    author: author
  } & { category: categoryName };

export type EditPostData = { id: id } & { title: title } & { body: body };

export type DispatchPostAction = Dispatch<PostAction>;

// Post action types

export type SetPostsFromServer = { type: 'SET_POSTS_FROM_SERVER' } & {
  posts: Array<Post>
};

export type AddPost = { type: 'ADD_POST' } & Post;

export type EditPost = { type: 'EDIT_POST' } & EditPostData;

export type DeletePost = { type: 'DELETE_POST' } & { id: id };

export type UpVotePost = { type: 'UP_VOTE_POST' } & { id: id };

export type DownVotePost = { type: 'DOWN_VOTE_POST' } & { id: id };

export type PostAction =
  | SetPostsFromServer
  | AddPost
  | EditPost
  | DeletePost
  | UpVotePost
  | DownVotePost;
