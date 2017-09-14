// @flow
import { connect } from 'react-redux';
import { Post } from '../components/Post';
import type { Action } from 'action-types';
import { editPost, deletePost } from '../actions';
import type { EditPostData } from 'action-types';

const mapStateToProps = (state: StateMap, ownProps) => {
  return {
    post: state.posts.byId[ownProps.match.params.id]
  }
}

export type EditPostDispatch = (postData: EditPostData) => Action;
export type DeletePostDispatch = (id: string) => Action;

const mapDispatchToProps = (dispatch: Dispatch<Action>): {
  editPost: EditPostDispatch,
  deletePost: DeletePostDispatch
} => {
  return {
    editPost: (postData) => dispatch(editPost(postData)),
    deletePost: (id) => dispatch(deletePost(id))
  };
}

export const PostDisplay = connect(mapStateToProps, mapDispatchToProps)(Post)
