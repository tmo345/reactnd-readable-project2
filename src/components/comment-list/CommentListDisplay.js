import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import { Grid, Button, Header, Loader, Comment } from 'semantic-ui-react';
import AddCommentDisplay from '../forms/AddCommentDisplay';
import EditCommentDisplay from '../forms/EditCommentDisplay';
import DeleteCommentDisplay from '../forms/DeleteCommentDisplay';
import SortingDisplay from '../sorting/SortingDisplay';
import { convertToList, sortListBy } from '../../utils/helpers';
import { pipe } from 'ramda';

class CommentListDisplay extends Component {
  render() {
    const { flag, direction } = this.props.sorting;
    const sortComments = pipe(convertToList, sortListBy(flag, direction));
    return (
      <Comment.Group size="large">
        <Header>Comments</Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column largeScreen={8}>
              <AddCommentDisplay parentId={this.props.parentId} />
            </Grid.Column>
            <Grid.Column largeScreen={8} floated="right">
              <SortingDisplay toSort="comments" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <EditCommentDisplay />
        <DeleteCommentDisplay />
        {this.props.hydratingCommentsComplete ? (
          <CommentList
            comments={sortComments(this.props.comments[this.props.parentId])}
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
  sorting: state.sorting.comments,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommentListDisplay);
