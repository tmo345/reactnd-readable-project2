// @flow
import { connect } from 'react-redux';
import { AddPostButton } from '../components/AddPostButton';
import { addPost } from '../actions';
import type { AddPostData } from '../actions';
import type { StateMap } from '../reducers';
import type { Action } from '../actions/types';

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
