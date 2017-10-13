import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setSortPostFlag,
  setSortCommentFlag,
} from '../../actions/sorting-actions';
import Sorting from './Sorting';

class SortingDisplay extends Component {
  handleSortFlagChange = event => {};

  render() {
    const {
      toSort,
      postSort,
      commentSort,
      setSortPostFlag,
      setSortCommentFlag,
    } = this.props;
    const sortingPosts = toSort === 'posts';
    return (
      <Sorting
        currentSort={sortingPosts ? postSort : commentSort}
        setSortFlags={sortingPosts ? setSortPostFlag : setSortCommentFlag}
      />
    );
  }
}

const mapStateToProps = state => ({
  postSort: state.sorting.posts.currentSort,
  commentSort: state.sorting.comments.currentSort,
});

const mapDispatchToProps = dispatch => ({
  setSortPostFlag: (flag, direction) =>
    dispatch(setSortPostFlag(flag, direction)),
  setSortCommentFlag: (flag, direction) =>
    dispatch(setSortCommentFlag(flag, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingDisplay);
