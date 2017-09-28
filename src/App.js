import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container, Grid } from 'semantic-ui-react';
import ListOfPosts from './containers/postList/PostListDisplay';
import { getAllPosts } from './actions/post-actions';
import PostList from './containers/postList/PostList';
import SinglePost from './components/SinglePost';

class App extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <NavigationDisplay />
        </Grid.Row>
        <Container>
          <Route
            exact
            path="/:category?"
            render={props => (
              <ListOfPosts
                posts={this.props.posts}
                urlCategory={props.match.params.category}
                postsLoading={this.props.postsLoading}
              />
            )}
          />
          <Route
            exact
            path="/:category/:id"
            render={props => {
              const id = this.props.urlId;
              const posts = this.props.posts;
              return (
                <SinglePost
                  posts={this.props.posts}
                  urlId={props.match.params.id}
                  postsLoading={this.props.postsLoading}
                  {...props}
                />
              );
            }}
          />
        </Container>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  postsLoading: state.ui.postsLoading
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
