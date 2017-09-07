import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addPost } from './actions';
import { connect } from 'react-redux';

class App extends Component {
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

const mapDispatchToProps = (dispatch) => {
  return {
    onDivClick: (data) => dispatch(addPost(data))  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
