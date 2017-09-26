import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById, editPost, deletePost } from '../actions/post-actions';
import { Grid } from 'semantic-ui-react';
import SinglePost from '../components/SinglePost';

class PostDisplay extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column largeScreen={16}>
            <SinglePost
              id={this.props.id}
              post={this.props.post}
              getPostById={this.props.getPostById}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let urlId;
  try {
    urlId = ownProps.match.params.id;
  } catch (e) {
    urlId = '';
  }
  return {
    post: urlId ? state.posts[urlId] : {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editPost: postData => dispatch(editPost(postData)),
    deletePost: id => dispatch(deletePost(id)),
    getPostById: id => dispatch(getPostById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDisplay);
