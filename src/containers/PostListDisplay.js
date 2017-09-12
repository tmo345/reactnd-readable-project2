// @flow
import { connect } from 'react-redux';
import type { StateMap } from '../reducers';
import { PostList } from '../components/PostList.js';

const mapStateToProps = (state: StateMap)  => {
  return {
    posts: state.get('posts'),
  }
}

export const PostListDisplay = connect(
  mapStateToProps
)(PostList);
