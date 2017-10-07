import React from 'react';
import './App.css';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AddPostDisplay from './components/forms/AddPostDisplay';
import { Container, Grid, Menu, Loader } from 'semantic-ui-react';
import PostListDisplay from './components/post-list/PostListDisplay';
import { getAllPosts } from './actions/post-actions';
import SinglePostDisplay from './components/single-post/SinglePostDisplay';
import styled from 'styled-components';

const SiteBranding = styled(Menu.Menu)`
  border-left: 1px solid #333;
  border-right: 1px solud #333;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Menu inverted={true} attached="top">
            <Container>
              <SiteBranding>
                <Menu.Item as={Link} to="/">
                  <h1>Readable</h1>
                </Menu.Item>
              </SiteBranding>

              <Menu.Menu position="right">
                <AddPostDisplay />
              </Menu.Menu>
            </Container>
          </Menu>
        </Grid.Row>
        {this.props.postsLoading ? (
          <Loader active />
        ) : (
          <Container>
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
            <Route
              exact
              path="/:category/:id"
              render={props => {
                if (this.props.deletePostFormSubmitted) {
                  return (
                    <div>
                      <Loader active />
                      <h2>Post successfully deleted.</h2>
                      <p>Redirecting you to main page...</p>
                    </div>
                  );
                }
                return this.props.posts.hasOwnProperty(
                  props.match.params.id,
                ) ? (
                  <SinglePostDisplay
                    posts={this.props.posts}
                    urlId={props.match.params.id}
                    {...props}
                  />
                ) : (
                  <div>
                    <h2>Post Not Found</h2>
                    <p>Looks like the post you were looking for isn't here.</p>
                    <Link to="/">Back to All Posts</Link>
                  </div>
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
  deletePostFormSubmitted: state.ui.deletePostFormSubmitted,
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
