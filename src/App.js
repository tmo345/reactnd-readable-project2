import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container, Grid } from 'semantic-ui-react';
import ListOfPosts from './containers/postList/PostListDisplay';
import PostDisplay from './containers/PostDisplay';

export default class App extends React.Component {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <NavigationDisplay />
        </Grid.Row>
        <Container>
          <Route exact path="/:category?" component={ListOfPosts} />
          <Route exact path="/:category/:id" component={PostDisplay} />
        </Container>
      </Grid>
    );
  }
}
