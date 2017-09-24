// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Action } from 'action-types';
import { getPostById, editPost, deletePost } from '../actions/post-actions';
import { Grid } from 'semantic-ui-react';
import SinglePost from '../components/SinglePost';
import type { id, Post, EditPostData } from '../types/post-types';

type Props = {
  id: id,
  post: Post,
  getPostById: id => Dispatch<typeof getPostById>,
  editPost: EditPostData => Dispatch<typeof editPost>,
  deletePost: id => Dispatch<typeof deletePost>
};

class PostDisplay extends Component<Props> {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column largeScreen={16}>
            <SinglePost
              getPostById={this.props.getPostById}
              id={this.props.id}
              post={this.props.post}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id],
    id: ownProps.match.params.id
  };
};

export type EditPostDispatch = (postData: EditPostData) => Action;
export type DeletePostDispatch = (id: string) => Action;

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    editPost: (postData: EditPostData) => dispatch(editPost(postData)),
    deletePost: (id: id) => dispatch(deletePost(id)),
    getPostById: (id: id) => dispatch(getPostById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDisplay);
