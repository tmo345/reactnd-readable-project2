// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { PostList } from './PostList';
import type { SortFlag, SortDirection, Action, DispatchWithThunk, ThunkAction } from 'action-types';
import type { SortingState, Category, Post, CategoryName, } from 'store-types';
import { setActiveCategory, getPostsByCategory, setSortPostByFlag } from '../../actions';
import SelectCategory from '../../components/SelectCategory';
import { Grid } from 'semantic-ui-react';
import { curry, compose, sortWith, sort, sortBy, ascend, descend, prop as _prop } from 'ramda';
import { convertToList } from '../../utils/helpers';
import PostSort from '../../components/PostSort';
import type { Dispatch } from 'redux';
import type { StoreState } from 'store-types';

type Props = {
  categories: Array<Category>,
  filterCategory: CategoryName,
  posts: Array<Post>,
  sorting: SortingState,
  getPostsByCategory: (filterCategory: CategoryName) => Dispatch<Action>,
  setSortPostByFlag: (flag: SortFlag, direction: SortDirection) => Dispatch<Action>,
  match: *
}

class ListOfPosts extends React.Component<Props> {
  componentDidMount() {
    this.props.getPostsByCategory(this.props.filterCategory)
  }


  sortPostsBy = (flag, direction) => {
    const isAscending = direction === 'ascending';
    if (isAscending) {
      return sortWith([ascend(_prop(flag))])
    } else {
      return sortWith([descend(_prop(flag))])
    }
  }

  render() {
    const { flag, direction } = this.props.sorting;
    const sortPosts = this.sortPostsBy(flag, direction);

    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column largeScreen={10}>
            <h2>Posts</h2>
            <PostSort
              setSortPostByFlag={this.props.setSortPostByFlag}
            />
            <PostList
              posts={sortPosts(convertToList(this.props.posts))}
            />
          </Grid.Column>
          <Grid.Column largeScreen={6}>
            <SelectCategory
              categories={this.props.categories}
              getPostsByCategory={this.props.getPostsByCategory}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}


const mapStateToProps = (state: StoreState, ownProps: Props)  => ({
  posts: state.posts,
  filterCategory: ownProps.match.params.category || 'all',
  categories: state.categories,
  sorting: state.sorting
});

const mapDispatchToProps = (dispatch: *) => ({
  getPostsByCategory: (category: CategoryName) => dispatch(getPostsByCategory(category)),
  setSortPostByFlag: (flag, direction) => dispatch(setSortPostByFlag(flag, direction))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfPosts);
