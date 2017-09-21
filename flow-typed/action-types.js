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
  }

  declare type AddPostData = {
    title: string,
    body: string,
    author: string,
    category: string
  };

  declare type EditPostData = {
    id: string,
    title: string,
    body: string
  };

  declare type SetActiveCategory = {
    type: 'SET_ACTIVE_CATEGORY',
    name: CategoryName
  }

  declare type SortFlag = 'voteScore' | 'timestamp';
  declare type SortDirection = 'ascending' | 'descending';

  declare type SetSortPostByFlag = {
    type: 'SET_SORT_POST_FLAG',
    flag: SortFlag,
    direction: SortDirection
  }

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
    category: string,
    voteScore: number
  }

  declare type EditPost = {
    type: 'EDIT_POST',
    id: string,
    title: string,
    body: string
  }

  declare type DeletePost = {
    type: 'DELETE_POST',
    id: string
  }

  declare type AddComment = {
    type: 'ADD_COMMENT',
    id: string,
    timestamp: number,
    body: string,
    author: string,
    parentId: string,
    voteScore: number
  }

  declare type EditComment = {
    type: 'EDIT_COMMENT',
    id: string,
    timestamp: number,
    body: string
  }

  declare type DeleteComment = {
    type: 'DELETE_COMMENT',
    id: string
  }

  declare type SetPostsByCategory = {
    type: 'SET_POSTS_BY_CATEGORY',
    posts: Array<Post>
  }

  declare type GetPostsByCategory =
    (category: CategoryName) => DispatchWithThunk

  declare type GetPostById = {
    type: 'GET_POST_BY_ID',
    post: Post
  }

  declare type FetchPostsById =
    (id: string) => DispatchWithThunk

  declare type PostAction =
    | HydratePosts
    | AddPost
    | EditPost
    | DeletePost
    | UpVotePost
    | DownVotePost

  declare type CommentAction =
    | AddComment
    | EditComment
    | DeleteComment
    | UpVoteComment
    | DownVoteComment

  declare type ThunkAction =
    | FetchPostsById
    | GetPostsByCategory

  declare type Action =
    | GetPostById
    | SetActiveCategory
    | SetPostsByCategory
    | SetSortPostByFlag
    | PostAction
    | CommentAction


    declare type Thunk<A> = ((Dispatch) => (Promise<void> | void)) => A

    declare type DispatchWithThunk =
      & Dispatch<Action>
      & Thunk<Action | ThunkAction>

}



