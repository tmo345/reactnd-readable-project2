import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import { Grid, Button, Header, Loader, Comment } from 'semantic-ui-react';
import { stateObjectToArray } from '../../reducers/helpers';

class CommentListDisplay extends Component {
  render() {
    console.log('cld', this.props);
    return (
      <Comment.Group size="large">
        <Header>Comments</Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column largeScreen={8}>
              <Button color="green">Make Comment</Button>
            </Grid.Column>
            <Grid.Column largeScreen={8} floated="right">
              <span>Sort By: </span>
              <span>Date</span>
              <span> | </span>
              <span to="">Vote</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {!this.props.commentsHydrating ? (
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
  commentsHydrating: state.ui.commentsHydrating,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommentListDisplay);
