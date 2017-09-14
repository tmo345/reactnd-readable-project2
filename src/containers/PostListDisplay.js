// @flow
import { connect } from 'react-redux';
import { PostList } from '../components/PostList.js';

const mapStateToProps = (state)  => {
  return {
    posts: state.posts,
  }
}

export const PostListDisplay = connect(
  mapStateToProps
)(PostList);
