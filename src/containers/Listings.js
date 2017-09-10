// @flow
import { connect } from 'react-redux';
import { addPost, editPost, deletePost } from '../actions';
import type { StateMap } from '../reducers';
import type { Dispatch } from 'redux';
import type { Action } from '../actions/types';
import type { AddPostData, EditPostData } from '../actions';
import { PostList } from '../components/PostList.js';

const mapStateToProps = (state: StateMap)  => {
  return {
    posts: state.get('posts'),
  }
}

export type AddPostDispatch = (postData: AddPostData) => Action;
export type EditPostDispatch = (postData: EditPostData) => Action;
export type DeletePostDispatch = (id: string) => Action;

const mapDispatchToProps = (dispatch: Dispatch<Action>): {
  addPost: AddPostDispatch,
  editPost: EditPostDispatch,
  deletePost: DeletePostDispatch
} => {
  return {
    addPost: (postData) => dispatch(addPost(postData)),
    editPost: (postData) => dispatch(editPost(postData)),
    deletePost: (id) => dispatch(deletePost(id))
  };
}

export const PostDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
