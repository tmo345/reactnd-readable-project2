// @flow
import { connect } from 'react-redux';
import { PostList } from '../components/PostList.js';

const mapStateToProps = (state, ownProps)  => {
  return {
    posts: state.posts,
    filterCategory: ownProps.match.params.category || 'all'
  }
}

export const PostListDisplay = connect(
  mapStateToProps
)(PostList);
