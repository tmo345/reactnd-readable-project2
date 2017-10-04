import React, { Component } from 'react';
import SinglePost from './SinglePost';
import { connect } from 'react-redux';
import { voteForPost } from '../../actions/post-actions';
import CommentList from '../comment-list/CommentList';
import SinglePostHeader from './SinglePostHeader';

class SinglePostDisplay extends Component {
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
        <SinglePost
          posts={this.props.posts}
          urlId={this.props.match.params.id}
          postsLoading={this.props.postsLoading}
          postVotesNowProcessing={this.props.postVotesNowProcessing}
          handlePostVote={this.props.voteForPost}
        />
        <CommentList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postVotesNowProcessing: state.ui.processingVotes.posts,
  posts: state.posts,
  postsLoading: state.ui.postsLoading
});

const mapDispatchToProps = dispatch => ({
  voteForPost: (id, direction) => dispatch(voteForPost(id, direction))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostDisplay);
