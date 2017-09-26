
import { connect } from 'react-redux';
import { AddPostButton } from '../components/AddPostButton';
import { addPost } from '../actions/post-actions';
import type { AddPostData } from '../types/post-types';
import type { Action } from '../types/action-type';

const mapStateToProps = state => ({
  posts: state.posts
});

export type AddPostDispatch = (postData: AddPostData) => Action;

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  addPost: postData => dispatch(addPost(postData))
});

export const AddPostDisplay = connect(mapStateToProps, mapDispatchToProps)(
  AddPostButton
);
