import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList } from '../components/PostList';
import type { Post, CategoryName } from 'store-types';
import { setActiveCategory } from '../actions';
import SelectCategory from '../components/SelectCategory';
import { Grid } from 'semantic-ui-react';
import { curry, compose } from 'ramda';
import { convertToList } from '../utils/helpers';

const filterBy = curry(
  (category, objectArray) => {
    if (category === 'all') {
      return objectArray;
    } else {
      return objectArray.filter((object) => object.category === category);
    }
  }
)

export const makeFilterBy = (filter) => {
  return compose(filterBy(filter), convertToList);
}

const PostListDisplay = (props) => {
  const filterPosts = makeFilterBy(props.filterCategory)
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column largeScreen={10}>
          <PostList filteredPosts={filterPosts(props.postsById)} />
        </Grid.Column>
        <Grid.Column largeScreen={6}>
          <SelectCategory
            setActiveCategory={props.setActiveCategory}
            categories={props.categories}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
}

const mapStateToProps = (state, ownProps)  => ({
  postsById: state.posts.byId,
  filterCategory: ownProps.match.params.category || 'all',
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCategory: (newActiveCategory) => dispatch(setActiveCategory(newActiveCategory))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListDisplay);
