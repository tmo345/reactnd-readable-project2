import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCommentsForPost } from '../../actions/comment-actions';
import PostCard from './PostCard';
import { stateArraytoObject, stateObjectToArray } from '../../reducers/helpers';

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
    console.log(this.state.commentNumberLoading);
    return (
      <PostCard
        post={this.props.post}
        commentNumber={this.calculateCommentNumber()}
        commentNumberLoading={this.state.commentNumberLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  setCommentsForPost: postId => dispatch(setCommentsForPost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCardDisplay);
