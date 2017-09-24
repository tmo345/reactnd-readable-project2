// @flow
/**
 * Note: Using string literals for action types instead of constants
 * because flow can enforce the type as the exact string literal.
 */
import type { CategoryName, Post, StoreState } from 'store-types';

declare module 'action-types' {
  declare type HydratePosts = {
    type: 'HYDRATE_POSTS',
    posts: Array<Post>
  };

  declare type AddPostData = {
    title: string,
    body: string,
    author: string,
    category: CategoryName
  };

  declare type EditPostData = {
    id: string,
    title: string,
    body: string
  };

  declare type SetActiveCategory = {
    type: 'SET_ACTIVE_CATEGORY',
    name: CategoryName
  };

  declare type SortFlag = 'voteScore' | 'timestamp';
  declare type SortDirection = 'ascending' | 'descending';

  declare type SetSortPostByFlag = {
    type: 'SET_SORT_POST_FLAG',
    flag: SortFlag,
    direction: SortDirection
  };

  declare type UpVotePost = {
    type: 'UP_VOTE_POST',
    id: string
  };

  declare type DownVotePost = {
    type: 'DOWN_VOTE_POST',
    id: string
  };

  declare type UpVoteComment = {
    type: 'UP_VOTE_COMMENT',
    id: string
  };

  declare type DownVoteComment = {|
    type: 'DOWN_VOTE_COMMENT',
    id: string
  |};

  declare type AddPost = {
    type: 'ADD_POST',
    id: string,
    timestamp: number,
    title: string,
    body: string,
    author: string,
    category: CategoryName,
    voteScore: number
  };

  declare type EditPost = {
    type: 'EDIT_POST',
    id: string,
    title: string,
    body: string
  };

  declare type DeletePost = {
    type: 'DELETE_POST',
    id: string
  };

  declare type AddComment = {
    type: 'ADD_COMMENT',
    id: string,
    timestamp: number,
    body: string,
    author: string,
    parentId: string,
    voteScore: number
  };

  declare type EditComment = {
    type: 'EDIT_COMMENT',
    id: string,
    timestamp: number,
    body: string
  };

  declare type DeleteComment = {
    type: 'DELETE_COMMENT',
    id: string
  };

  declare type SetPostsByCategory = {
    type: 'SET_POSTS_BY_CATEGORY',
    posts: Array<Post>
  };

  declare type GetPostsByCategory = (
    category: CategoryName
  ) => DispatchWithThunk;

  declare type GetPostById = {
    type: 'GET_POST_BY_ID',
    post: Post
  };

  declare type FetchPostsById = (id: string) => DispatchWithThunk;

  declare type PostAction =
    | HydratePosts
    | AddPost
    | EditPost
    | DeletePost
    | UpVotePost
    | DownVotePost;

  declare type CommentAction =
    | AddComment
    | EditComment
    | DeleteComment
    | UpVoteComment
    | DownVoteComment;

  declare type ThunkAction = FetchPostsById | GetPostsByCategory;

  declare type Action =
    | GetPostById
    | SetActiveCategory
    | SetPostsByCategory
    | SetSortPostByFlag
    | PostAction
    | CommentAction;

  // Thunk and DispatchWithThunk types are based on "Type-check Store" section in blog post by Satyajit Sahoo:
  // https://blog.callstack.io/type-checking-react-and-redux-thunk-with-flow-part-2-206ce5f6e705

  // The following is my understanding of the type signatures I tweaked from blog post. The Dispatch function type returns an Action as described in https://github.com/flowtype/flow-typed/blob/master/definitions/npm/redux_v3.x.x/flow_v0.33.x-/redux_v3.x.x.js. With redux-thunk, the action creators return a function (will refer to as inner function). In this case, the inner function makes an ajax request and returns a Promise. If the ajax request is successful, the promise is resolved and a synchronous Action is dispatched. This Dispatch returns an Action. Below you see the polymorphic type A, which will be the concrete type Action.

  declare type Thunk<A> = ((Dispatch) => Promise<void> | void) => A;

  // My understanding: DispatchWithThunk is a modified Dispatch
  declare type DispatchWithThunk = Dispatch<Action> &
    Thunk<Action | ThunkAction>;
}
