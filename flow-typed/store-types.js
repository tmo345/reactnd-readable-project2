// @flow
import type Moment from 'moment'

declare module 'store-types' {

  declare type CategoryName =
    | 'all'
    | 'react'
    | 'redux'
    | 'udacity'

  declare type Category = {
    name: CategoryName,
    path: string,
    active: boolean
  }

  declare type CategoryState = Array<Category>


  declare type Post = {
    id: string,
    timestamp: Moment,
    title: string,
    body: string,
    author: string,
    category: string,
    voteScore: number
  }

  declare type PostState = {
    [id: string]: Post
  }

  declare type Comment = {
    id: string,
    parentId: string,
    timestamp: string,
    body: string,
    author: string,
    voteScore: number
  }


  declare type CommentState = {
    byId: {
      [id: string]: Comment
    },
    allIds: (?string)[]
  }

  declare type SortingState = {
    flag: 'voteScore' | 'date',
    direction: 'ascending' | 'descending'
  }

  declare type StoreState = {
    categories: CategoryState,
    posts: PostState,
    comments: CommentState,
    sorting: SortingState
  }


}
