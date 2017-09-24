// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Action } from 'action-types';
import { getPostById, editPost, deletePost } from '../actions/post-actions';
import Post from '../components/Post';
import type { EditPostData } from 'action-types';
import { Grid } from 'semantic-ui-react';

class PostDisplay extends Component<*> {
  componentWillMount() {
    this.props.getPostById(this.props.match.params.id);
  }

  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column largeScreen={16}>
            <Post
              fetchPostById={this.props.fetchPostById}
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
    posts: state.posts,
    id: ownProps.match.params.id
  };
};

export type EditPostDispatch = (postData: EditPostData) => Action;
export type DeletePostDispatch = (id: string) => Action;

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    editPost: postData => dispatch(editPost(postData)),
    deletePost: id => dispatch(deletePost(id)),
    getPostById: id => dispatch(getPostById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDisplay);
