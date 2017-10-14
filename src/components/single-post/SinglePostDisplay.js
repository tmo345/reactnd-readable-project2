import React, { Component } from 'react';
import SinglePostBody from './SinglePostBody';
import { connect } from 'react-redux';
import { voteForPost } from '../../actions/post-actions';
import CommentListDisplay from '../comment-list/CommentListDisplay';
import SinglePostHeader from './SinglePostHeader';
import { Loader } from 'semantic-ui-react';

class SinglePostDisplay extends Component {
  render() {
    const postId = this.props.match.params.id;
    const post = this.props.posts[postId];
    const commentNumber = this.props.comments[postId] ? (
      Object.keys(this.props.comments[postId]).length
    ) : (
      <Loader inline active size="mini" />
    );
    return (
      <div>
        <SinglePostHeader
          post={post}
          handleVote={this.props.voteForPost}
          votesNowProcessing={this.props.postVotesNowProcessing}
          postsLoading={this.props.postsLoading}
        />
        <SinglePostBody
          posts={this.props.posts}
          urlId={this.props.match.params.id}
          postsLoading={this.props.postsLoading}
          postVotesNowProcessing={this.props.postVotesNowProcessing}
          handlePostVote={this.props.voteForPost}
          deletePostFormSubmitted={this.props.deletePostFormSubmitted}
          history={this.props.history}
          commentNumber={commentNumber}
        />
        <CommentListDisplay parentId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postVotesNowProcessing: state.ui.votes.processingPostVotes,
  posts: state.posts,
  postsLoading: state.ui.postsLoading,
  deletePostFormSubmitted: state.ui.deletePostFormSubmitted,
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  voteForPost: (id, direction) => dispatch(voteForPost(id, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostDisplay);
