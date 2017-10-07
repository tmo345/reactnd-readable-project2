import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCommentsForPost } from '../../actions/comment-actions';
import PostCard from './PostCard';
import { stateObjectToArray } from '../../reducers/helpers';
import { voteForPost } from '../../actions/post-actions';
import { Loader } from 'semantic-ui-react';

class PostCardDisplay extends Component {
  componentDidMount = () => {
    this.props.setCommentsForPost(this.props.post.id);
  };

  calculateCommentNumber = () => {
    const commentsArray = stateObjectToArray(this.props.comments);
    return commentsArray.length;
  };

  render() {
    return (
      <PostCard
        post={this.props.post}
        comments={this.props.comments}
        handlePostVote={this.props.voteForPost}
        votesNowProcessing={this.props.postVotesNowProcessing}
        commentNumber={
          this.props.comments ? (
            this.calculateCommentNumber(this.props.comments)
          ) : (
            <Loader active inline size="tiny" />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    postVotesNowProcessing: state.ui.processingVotes.posts,
    comments: state.comments[ownProps.post.id],
  };
};

const mapDispatchToProps = dispatch => ({
  setCommentsForPost: postId => dispatch(setCommentsForPost(postId)),
  voteForPost: (id, direction) => dispatch(voteForPost(id, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCardDisplay);
