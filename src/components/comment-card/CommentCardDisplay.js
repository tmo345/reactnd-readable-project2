import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentCard from './CommentCard';
import { voteForComment } from '../../actions/comment-actions';
import { Loader } from 'semantic-ui-react';
import {
  resetEditCommentFormSubmitted,
  resetDeleteCommentFormSubmitted,
} from '../../actions/ui/forms';
import {
  openEditCommentModal,
  openDeleteCommentModal,
} from '../../actions/ui/modal';

class CommentCardDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.comment ? (
          <CommentCard
            comment={this.props.comment}
            initialValues={{
              body: this.props.comment.body,
              id: this.props.comment.id,
            }}
            handlePostVote={this.props.voteForComment}
            commentVotesNowProcessing={this.props.commentVotesNowProcessing}
            openEditCommentModal={this.props.openEditCommentModal}
            resetEditCommentFormSubmitted={
              this.props.resetEditCommentFormSubmitted
            }
            openDeleteCommentModal={this.props.openDeleteCommentModal}
            resetDeleteCommentFormSubmitted={
              this.props.resetDeleteCommentFormSubmitted
            }
          />
        ) : (
          <Loader active />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  commentVotesNowProcessing: state.ui.votes.processingCommentVotes,
  hydratingCommentsComplete: state.ui.hydration.hydratingCommentsComplete,
});
const mapDispatchToProps = dispatch => ({
  voteForComment: (id, direction) => dispatch(voteForComment(id, direction)),
  openEditCommentModal: (id, parentId) =>
    dispatch(openEditCommentModal(id, parentId)),
  resetEditCommentFormSubmitted: () =>
    dispatch(resetEditCommentFormSubmitted()),
  openDeleteCommentModal: (id, parentId) =>
    dispatch(openDeleteCommentModal(id, parentId)),
  resetDeleteCommentFormSubmitted: () =>
    dispatch(resetDeleteCommentFormSubmitted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCardDisplay);
