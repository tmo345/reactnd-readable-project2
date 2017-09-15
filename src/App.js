// @flow

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { MainView } from './components/MainView';
import { PostDisplay } from './containers/PostDisplay';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container, Grid,  } from 'semantic-ui-react';
import SelectCategoryDisplay from './containers/SelectCategoryDisplay';


export default class App extends Component<*> {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <NavigationDisplay />
        </Grid.Row>
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column largeScreen={10}>
              <MainView />
            </Grid.Column>
            <Grid.Column largeScreen={6}>
              <SelectCategoryDisplay />
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid>
      );
  }
}
