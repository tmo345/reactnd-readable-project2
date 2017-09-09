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
import { getCategories } from './utils/api'

type Props = {
  store: ReduxStore,
  onDivClick: (data: {title: string, body: string, author: string, category: string}) => AddPost,
  dispatchCategories: (categories: string[]) => SetCategories
}

class App extends Component<Props> {
  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.props.dispatchCategories(categories);
      });
  }

  render() {
    return (
      <div className="App"
        onClick={() => this.props.onDivClick({title: 'title', body: 'body', author: 'author', category: 'category'})}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {}
}


const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onDivClick(data: AddPostData) {
    dispatch(addPost(data))  },
  dispatchCategories(categories) {
    dispatch(setCategories(categories))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
