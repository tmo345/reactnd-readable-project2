import { combineReducers } from 'redux';
import hydration from './hydration';
import modals from './modals';
import forms from './forms';
import votes from './votes';

export default combineReducers({
  hydration,
  modals,
  forms,
  votes,
});
