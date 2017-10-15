import React from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { Container, Grid, Loader } from 'semantic-ui-react';

import { getAllPosts } from './actions/post-actions';
import { setCommentsForPost } from './actions/comment-actions';
import { hydratingCommentsComplete } from './actions/ui/hydration';

import ReadableHeader from './components/ReadableHeader';
import PostListDisplay from './components/post-list/PostListDisplay';
import SinglePostDisplay from './components/single-post/SinglePostDisplay';
import PostDeletedMessage from './components/messages/PostDeletedMessage';
import PostNotFoundMessage from './components/messages/PostNotFoundMessage';

class App extends React.Component {
  componentDidMount() {
    /* Hydrate posts and comments for each post.
     *
     * Once all the posts are fetched, need to fetch all the comments for each post.
     * The readable api server only allows you to get the comments for one post at
     * a time. In order to track when all the comments are back, map over postIds with
     * setCommentsForPost and pass the returned array of promises to axios.all. On
     * resolution of all the promises, we can set hydratingCommentsComplete to true.
     */
    this.props.getAllPosts().then(() => {
      const {
        posts,
        setCommentsForPost,
        hydratingCommentsComplete,
      } = this.props;
      const postIds = Object.keys(posts);
      axios
        .all(postIds.map(setCommentsForPost))
        .then(() => hydratingCommentsComplete());
    });
  }

  render() {
    return (
      <Grid columns={1}>
        <ReadableHeader />
        {!this.props.hydratingPostsComplete ||
        !this.props.hydratingCommentsComplete ? (
          <Loader active />
        ) : (
          <Container>
            // List of posts with sorting and category filter controls
            <Route
              exact
              path="/:category?"
              render={props => (
                <PostListDisplay
                  posts={this.props.posts}
                  urlCategory={props.match.params.category}
                  {...props}
                />
              )}
            />
            // Single post display with comment list
            <Route
              exact
              path="/:category/:id"
              render={props => {
                // Temporarily display delete post successful message with redirect to main page
                if (this.props.deletePostFormSubmitted) {
                  return <PostDeletedMessage />;
                }
                // Check to see if post exists (for example, user might visit the url of a
                // previously deleted post). If it exists, render SinglePostDisplay. If it does not
                // exist, then render PostNotFoundMessage.
                return this.props.posts.hasOwnProperty(
                  props.match.params.id,
                ) ? (
                  <SinglePostDisplay
                    posts={this.props.posts}
                    urlId={props.match.params.id}
                    {...props}
                  />
                ) : (
                  <PostNotFoundMessage />
                );
              }}
            />
          </Container>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  postsLoading: state.ui.postsLoading,
  deletePostFormSubmitted: state.ui.forms.deletePostFormSubmitted,
  hydratingPostsComplete: state.ui.hydration.hydratingPostsComplete,
  hydratingCommentsComplete: state.ui.hydration.hydratingCommentsComplete,
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  setCommentsForPost: id => dispatch(setCommentsForPost(id)),
  hydratingCommentsComplete: () => dispatch(hydratingCommentsComplete()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
