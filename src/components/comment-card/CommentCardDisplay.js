import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentCard from './CommentCard';
import { voteForComment } from '../../actions/comment-actions';

class CommentCardDisplay extends Component {
  render() {
    return (
      <div>
        <CommentCard
          comment={this.props.comment}
          handlePostVote={this.props.voteForComment}
          commentVotesNowProcessing={this.props.commentVotesNowProcessing}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  commentVotesNowProcessing: state.ui.votes.processingCommentVotes,
});
const mapDispatchToProps = dispatch => ({
  voteForComment: (id, direction) => dispatch(voteForComment(id, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCardDisplay);
