// @flow

import React, { Component } from 'react';
import './App.css';
import { PostDisplay } from './containers/Listings'


export default class App extends Component<*> {
  render() {
    return (
      <div className="App">
        <PostDisplay />
      </div>
    );
  }
}
