// @flow
import { connect } from 'react-redux';
import { AddPostButton } from '../components/AddPostButton';
import { addPost } from '../actions';
import type { AddPostData } from 'action-types';
import type { Action } from 'action-types';
import type { StateMap } from 'store-types';

const mapStateToProps = (state: StateMap) => ({
  posts: state.get('posts')
});

export type AddPostDispatch = (postData: AddPostData) => Action;

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    addPost: (postData) => dispatch(addPost(postData)),
});

export const AddPostDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostButton);
