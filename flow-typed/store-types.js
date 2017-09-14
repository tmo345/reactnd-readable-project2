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
    byId: {
      [id: string]: Post
    },
    allIds: (?string)[]
  }

  declare type Comment = {
    id: string,
    parentId: string,
    timestamp: string,
    body: string,
    author: string,
    voteScore: number
  }

  declare type Category = {
    name: string,
    path: string
  }

  declare type StateJS = {|
    categories: Array<?Category>,
    posts: {
      [id: string]: Post
    },
    comments: {
      [id: string]: Comment
    },
    categorySelect: {
      dropdownOpen: boolean,
      active: string
    }
  |}

  declare type StateMap = Map<string,(string|number|Post|Comment|Array<Category>|boolean|Moment)>
}
