import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { setSortPostByFlag } from '../../actions/sorting-actions';
import { setActiveCategory } from '../../actions/category-actions';
import SelectCategory from '../categories/SelectCategory';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import { sort, ascend, descend, prop as _prop } from 'ramda';
import { convertToList } from '../../utils/helpers';
import PostSort from '../sorting/PostSort';
import { withRouter } from 'react-router-dom';

class PostListDisplay extends Component {
  componentDidMount() {
    this.props.setActiveCategory(this.props.urlCategory);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.setActiveCategory(nextProps.urlCategory);
    }
  }

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
            <Dimmer active={this.props.postsLoading} inverted>
              <Loader />
            </Dimmer>
            <PostSort setSortPostByFlag={this.props.setSortPostByFlag} />
            <PostList
              posts={sortPosts(convertToList(this.props.posts))}
              activeCategory={this.props.activeCategory}
            />
          </Grid.Column>
          <Grid.Column largeScreen={6}>
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
  sorting: state.sorting,
  comments: state.comments
});

const mapDispatchToProps = (dispatch: *) => ({
  setSortPostByFlag: (flag, direction) =>
    dispatch(setSortPostByFlag({ flag, direction })),
  setActiveCategory: category => dispatch(setActiveCategory(category))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostListDisplay)
);
