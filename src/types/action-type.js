// @flow

import type { PostAction } from './post-types';
import type { CategoryAction } from './category-types';
import type { SortingAction } from './sorting-types';
import type { CommentAction } from './comment-types';

export type Action =
  | PostAction
  | CategoryAction
  | SortingAction
  | CommentAction;
