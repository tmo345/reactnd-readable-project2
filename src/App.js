// @flow

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { MainView } from './components/MainView';
import { PostDisplay } from './containers/PostDisplay';
import NavigationDisplay from './containers/NavigationDisplay';



export default class App extends Component<*> {
  render() {
    return (
      <div className="App">
        <NavigationDisplay />
        <Route exact path="/" component={MainView} />
        <Route path="/post/:id" component={PostDisplay} />
      </div>
    );
  }
}
