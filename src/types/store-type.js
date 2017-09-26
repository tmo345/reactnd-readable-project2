

import type { PostState } from '../types/post-types';
import type { CategoryState } from '../types/category-types';
import type { SortingState } from '../types/sorting-types';
import type { CommentState } from '../types/comment-types';

export type StoreState = PostState &
  CategoryState &
  SortingState &
  CommentState;
