import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import { Grid, Button, Header, Loader, Comment } from 'semantic-ui-react';
import { stateObjectToArray } from '../../reducers/helpers';
import AddCommentDisplay from '../forms/AddCommentDisplay';
import EditCommentDisplay from '../forms/EditCommentDisplay';
import DeleteCommentDisplay from '../forms/DeleteCommentDisplay';

class CommentListDisplay extends Component {
  render() {
    return (
      <Comment.Group size="large">
        <Header>Comments</Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column largeScreen={8}>
              <AddCommentDisplay parentId={this.props.parentId} />
            </Grid.Column>
            <Grid.Column largeScreen={8} floated="right">
              <span>Sort By: </span>
              <span>Date</span>
              <span> | </span>
              <span to="">Vote</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <EditCommentDisplay />
        <DeleteCommentDisplay />
        {this.props.hydratingCommentsComplete ? (
          <CommentList
            comments={stateObjectToArray(
              this.props.comments[this.props.parentId],
            )}
          />
        ) : (
          <Loader active />
        )}
      </Comment.Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments,
  hydratingCommentsComplete: state.ui.hydration.hydratingCommentsComplete,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommentListDisplay);
