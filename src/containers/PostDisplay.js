// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { getPostById, editPost, deletePost } from '../actions/post-actions';
import { Grid } from 'semantic-ui-react';
import SinglePost from '../components/SinglePost';
import type { id, Post, EditPostData } from '../types/post-types';
import type { Action } from '../types/action-type';
import type { StoreState } from '../types/store-type';
import type { Match } from 'react-router-dom';

type Props = {
  id: id,
  post: Post,
  getPostById: id => Dispatch<typeof getPostById>,
  editPost: EditPostData => Dispatch<typeof editPost>,
  deletePost: id => Dispatch<typeof deletePost>,
  match: Match
};

class PostDisplay extends React.Component<Props> {
  render(): React.Node {
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

const mapStateToProps = (state: StoreState, ownProps: Props) => {
  let urlId;
  try {
    urlId = ownProps.match.params.id;
  } catch (e) {
    urlId = '';
    console.log(e.message);
  }
  return {
    post: urlId ? state.posts[urlId] : {}
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    editPost: (postData: EditPostData) => dispatch(editPost(postData)),
    deletePost: (id: id) => dispatch(deletePost(id)),
    getPostById: (id: id) => dispatch(getPostById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDisplay);
