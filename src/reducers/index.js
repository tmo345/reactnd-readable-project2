import { combineReducers } from 'redux';
import posts from './post-reducer';
import categories from './category-reducer';
import sorting from './sorting-reducer';
import comments from './comment-reducer';
import ui from './ui-reducer/index.js';
// import forms from './form-reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  posts,
  categories,
  comments,
  sorting,
  ui,
  form: formReducer,
});
