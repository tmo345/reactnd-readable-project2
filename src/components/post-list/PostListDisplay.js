import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { setActiveCategory } from '../../actions/category-actions';
import SelectCategory from '../categories/SelectCategory';
import { Grid } from 'semantic-ui-react';
import { buildSortFunction } from '../../utils/helpers';
import SortingDisplay from '../sorting/SortingDisplay';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const PostListColumn = styled.div`
  padding-right: 35px !important;
`;
const PostListHeader = styled.h2`
  margin: 1.2rem 0 1.3rem !important;
`;

class PostListDisplay extends Component {
  componentDidMount() {
    this.props.setActiveCategory(this.props.urlCategory);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.setActiveCategory(nextProps.match.params.category);
    }
  }

  render() {
    const { flag, direction } = this.props.sorting;
    const sortPosts = buildSortFunction(flag, direction);

    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column largeScreen={11} as={PostListColumn}>
            <PostListHeader>Posts</PostListHeader>
            <SortingDisplay toSort="posts" />
            <PostList
              posts={sortPosts(this.props.posts)}
              activeCategory={this.props.activeCategory}
              history={this.props.history}
            />
          </Grid.Column>
          <Grid.Column largeScreen={5}>
            <PostListHeader>Filters</PostListHeader>
            <SelectCategory
              setActiveCategory={this.props.setActiveCategory}
              categories={this.props.categories}
              activeCategory={this.props.activeCategory}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  activeCategory: state.categories.active,
  categories: state.categories.categories,
  comments: state.comments,
  postsLoading: state.ui.postsLoading,
  posts: state.posts,
  sorting: state.sorting.posts,
});

const mapDispatchToProps = (dispatch: *) => ({
  setActiveCategory: category => dispatch(setActiveCategory(category)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostListDisplay),
);
