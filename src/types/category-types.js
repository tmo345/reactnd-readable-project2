// @flow

export type categoryName =
  | 'all'
  | 'udacity'
  | 'react'
  | 'redux'
type path = string;
type active = boolean;

export type Category =
  & { name: categoryName }
  & { path: path }
  & { active: active }

export type CategoryState = Array<Category>

export type SetActiveCategory =
  & { type: 'SET_ACTIVE_CATEGORY' }
  & { name: categoryName }

export type CategoryAction = SetActiveCategory;
