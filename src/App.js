import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container, Grid, Menu } from 'semantic-ui-react';
import ListOfPosts from './containers/postList/PostListDisplay';
import { getAllPosts } from './actions/post-actions';
import SinglePost from './components/SinglePost';
import { Link } from 'react-router-dom';
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
                <NavigationDisplay />
              </Menu.Menu>
            </Container>
          </Menu>
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
            render={props => (
              <SinglePost
                posts={this.props.posts}
                urlId={props.match.params.id}
                postsLoading={this.props.postsLoading}
                {...props}
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
  getAllPosts: () => dispatch(getAllPosts())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
