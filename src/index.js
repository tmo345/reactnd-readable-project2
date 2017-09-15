// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux'
import type { Store } from 'redux';
import type { Action } from 'action-types';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import type { StoreState } from 'store-types'
import { getPosts } from './utils/api';
import { hydratePosts } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store: Store<StoreState, Action> =
  createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)

  ))

getPosts()
  .then((posts) => store.dispatch(hydratePosts(posts)))



ReactDOM.render(
  <Provider  store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
