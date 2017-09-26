

import { combineReducers } from 'redux';
import posts from './post-reducer';
import categories from './category-reducer';
import sorting from './sorting-reducer';
import comments from './comment-reducer';

export default combineReducers({
  posts,
  categories,
  comments,
  sorting
});
