// @flow
import { connect } from 'react-redux';
import { PostList } from '../components/PostList.js';
import type { StateMap } from 'store-types'

const mapStateToProps = (state: StateMap)  => {
  return {
    posts: state.get('posts'),
  }
}

export const PostListDisplay = connect(
  mapStateToProps
)(PostList);
