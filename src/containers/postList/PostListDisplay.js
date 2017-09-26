import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList } from './PostList';
import { setSortPostByFlag } from '../../actions/sorting-actions';
import { getPostsByCategory } from '../../actions/post-actions';
import { setActiveCategory } from '../../actions/category-actions';
import SelectCategory from '../../components/SelectCategory';
import { Grid } from 'semantic-ui-react';
import { sort, ascend, descend, prop as _prop } from 'ramda';
import { convertToList } from '../../utils/helpers';
import PostSort from '../../components/PostSort';
import { withRouter } from 'react-router-dom';

class ListOfPosts extends Component {
  componentDidMount() {
    this.props.setActiveCategory(this.props.filterCategory);
    this.props.getPostsByCategory(this.props.filterCategory);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.setActiveCategory(nextProps.filterCategory);
      this.props.getPostsByCategory(nextProps.filterCategory);
    }
  }

  handleCategoryChange = category => {
    this.props.setActiveCategory(category);
    this.props.getPostsByCategory(category);
  };

  sortPostsBy = (flag, direction) => {
    const isAscending = direction === 'ascending';
    if (isAscending) {
      return sort(ascend(_prop(flag)));
    } else {
      return sort(descend(_prop(flag)));
    }
  };

  render() {
    const { flag, direction } = this.props.sorting;
    const sortPosts = this.sortPostsBy(flag, direction);
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column largeScreen={10}>
            <h2>Posts</h2>
            <PostSort setSortPostByFlag={this.props.setSortPostByFlag} />
            <PostList posts={sortPosts(convertToList(this.props.posts))} />
          </Grid.Column>
          <Grid.Column largeScreen={6}>
            <SelectCategory categories={this.props.categories} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  filterCategory: ownProps.match.params.category || 'all',
  categories: state.categories,
  sorting: state.sorting
});

const mapDispatchToProps = (dispatch: *) => ({
  getPostsByCategory: category => dispatch(getPostsByCategory(category)),
  setSortPostByFlag: (flag, direction) =>
    dispatch(setSortPostByFlag({ flag, direction })),
  setActiveCategory: category => dispatch(setActiveCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosts);
