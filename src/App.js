// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addPost, setCategories } from './actions';
import { connect } from 'react-redux';
import type { ReduxStore } from './index.js';
import type { AddPost, SetCategories, Action } from './actions/types';
import type { AddPostData } from './actions';
import type { Dispatch } from 'redux';
import { getCategories } from './utils/api';
import { PostDisplay } from './containers/Listings'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PostDisplay />
      </div>
    );
  }
}
