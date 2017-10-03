import React, { Component } from 'react';
import SinglePost from './SinglePost';
import { connect } from 'react-redux';
import { voteForPost } from '../../actions/post-actions';

class SinglePostDisplay extends Component {
  render() {
    return (
      <SinglePost
        posts={this.props.posts}
        urlId={this.props.match.params.id}
        postsLoading={this.props.postsLoading}
        postVotesNowProcessing={this.props.postVotesNowProcessing}
        handlePostVote={this.props.voteForPost}
      />
    );
  }
}

const mapStateToProps = state => ({
  postVotesNowProcessing: state.ui.processingVotes.posts,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  voteForPost: (id, direction) => dispatch(voteForPost(id, direction))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostDisplay);
