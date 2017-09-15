// @flow

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { PostDisplay } from './containers/PostDisplay';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container, Grid,  } from 'semantic-ui-react';
import PostListDisplay from './containers/PostListDisplay';


export default class App extends Component<*> {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <NavigationDisplay />
        </Grid.Row>
        <Container>
          <Route exact path='/:category?' component={PostListDisplay} />

          <Route exact path='/:category/:id' render={(props) => (

            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column largeScreen={16}>
                  <PostDisplay {...props} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            )}>
          </Route>
          </Container>
        </Grid>
        );
        }
        }
