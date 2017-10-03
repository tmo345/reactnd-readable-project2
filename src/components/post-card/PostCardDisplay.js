import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCommentsForPost } from '../../actions/comment-actions';
import PostCard from './PostCard';
import { stateObjectToArray } from '../../reducers/helpers';
import { voteForPost } from '../../actions/post-actions';

class PostCardDisplay extends Component {
  state = {
    commentNumberLoading: true,
    commentNumber: 0
  };

  componentDidMount = () => {
    this.props.setCommentsForPost(this.props.post.id).then(() => {
      this.setState({
        commentNumberLoading: false,
        commentNumber: this.calculateCommentNumber()
      });
    });
  };

  calculateCommentNumber = () => {
    const commentsArray = stateObjectToArray(this.props.comments);
    const commentsForPost = commentsArray.filter(
      comment => comment.parentId === this.props.post.id
    );
    return commentsForPost.length;
  };

  render() {
    return (
      <PostCard
        post={this.props.post}
        commentNumber={this.state.commentNumber}
        commentNumberLoading={this.state.commentNumberLoading}
        handlePostVote={this.props.voteForPost}
        postVotesNowProcessing={this.props.postVotesNowProcessing}
      />
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  postVotesNowProcessing: state.ui.processingVotes.posts
});

const mapDispatchToProps = dispatch => ({
  setCommentsForPost: postId => dispatch(setCommentsForPost(postId)),
  voteForPost: (id, direction) => dispatch(voteForPost(id, direction))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCardDisplay);
