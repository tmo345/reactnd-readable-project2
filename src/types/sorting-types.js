// @flow

export type sortFlag =
  | 'voteScore'
  | 'timestamp'
export type sortDirection =
  | 'ascending'
  | 'descending'

export type SetSortPostByFlag =
  & { type: 'SET_SORT_POST_FLAG' }
  & { flag: sortFlag }
  & { direction: sortDirection }

export type SortingAction = SetSortPostByFlag

export type SortingState =
  & { flag: sortFlag }
  & { direction: sortDirection }

export type SetSortingData = SortingState;
