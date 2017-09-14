// @flow

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { MainView } from './components/MainView';
import { PostDisplay } from './containers/PostDisplay';
import NavigationDisplay from './containers/NavigationDisplay';
import { Container } from 'semantic-ui-react';
import SelectCategoryDisplay from './containers/SelectCategoryDisplay';


export default class App extends Component<*> {
  render() {
    return (
      <div className="App">
        <NavigationDisplay />
        <SelectCategoryDisplay />
        <MainView />
      </div>
    );
  }
}
