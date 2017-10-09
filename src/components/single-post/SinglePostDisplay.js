import React, { Component } from 'react';
import SinglePostBody from './SinglePostBody';
import { connect } from 'react-redux';
import { voteForPost } from '../../actions/post-actions';
import CommentListDisplay from '../comment-list/CommentListDisplay';
import SinglePostHeader from './SinglePostHeader';
import { setCommentsForPost } from '../../actions/comment-actions';
import { Redirect } from 'react-router-dom';

class SinglePostDisplay extends Component {
  componentDidMount() {
    if (!this.props.comments.hasOwnProperty(this.props.match.params.id)) {
      setCommentsForPost(this.props.match.params.id);
    }
  }
  render() {
    const post = this.props.posts[this.props.match.params.id];
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
