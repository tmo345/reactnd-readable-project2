// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList } from '../components/PostList.js';
import type { Post, CategoryName } from 'store-types';


type ByIdObject = {
  [id: string]: Post
}

type PostsArray = (Post)[]

class PostListDisplay extends Component<*> {
  toPostArray = (object: ByIdObject): PostsArray => {
    const keys = Object.keys(object)
    return keys.map((key) => object[key])
  }

  filterByCategory = (filterCategory: CategoryName, postsArray: PostsArray ): PostsArray => {
    if (filterCategory === 'all') {
      return postsArray;
    } else {
      return postsArray.filter((post) => post.category === filterCategory)
    }
  }

  render() {
    const postsArray = this.toPostArray(this.props.posts);
    const filteredPosts = this.filterByCategory(this.props.filterCategory, postsArray);
    return (
      <PostList posts={filteredPosts} />
      )
}
}



const mapStateToProps = (state, ownProps)  => {
  return {
    posts: state.posts.byId,
    filterCategory: ownProps.match.params.category || 'all'
  }
}


export default connect(
  mapStateToProps
)(PostListDisplay);
