// @flow

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PostDisplay from './containers/PostDisplay';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container, Grid,  } from 'semantic-ui-react';
import ListOfPosts from './containers/postList/PostListDisplay';
import { hydratePosts } from './actions'
import { getPosts } from './utils/api'
import { store  } from './index.js'

export default class App extends Component<*> {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <NavigationDisplay />
        </Grid.Row>
        <Container>
          <Route exact path='/:category?' component={ListOfPosts} />

          {/*<Route exact path='/:category/:id' component={PostDisplay} />*/}

          </Container>
        </Grid>
        );
        }
        }
