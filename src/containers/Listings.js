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

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    addPost: (postData: AddPostData) => dispatch(addPost(postData)),
    editPost: (postData: EditPostData) => dispatch(editPost(postData)),
    deletePost: (id: string) => dispatch(deletePost(id))
  };
}

export const PostDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
