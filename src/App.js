import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container, Grid } from 'semantic-ui-react';
import ListOfPosts from './containers/postList/PostListDisplay';
import PostDisplay from './containers/PostDisplay';
import { getAllPosts } from './actions/post-actions';
import { setActiveCategory } from './actions/category-actions';
import { setCurrentUrlId } from './actions/route-actions';
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
          <Route exact path="/:category/:id" component={PostDisplay} />
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
  getAllPosts: () => dispatch(getAllPosts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
