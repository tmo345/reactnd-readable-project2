import * as React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container, Grid } from 'semantic-ui-react';
import ListOfPosts from './containers/postList/PostListDisplay';
import PostDisplay from './containers/PostDisplay';

type Props = {};

export default class App extends React.Component<Props> {
  render(): React.Node {
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
