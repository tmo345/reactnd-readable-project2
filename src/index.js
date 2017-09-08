// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducer } from './reducers';
import { Provider } from 'react-redux'
import type { Store, Dispatch } from 'redux';
import type { Action } from './actions/types';
import type { StateMap } from './reducers'

export type ReduxStore = Store<StateMap, Action, Dispatch<Action>>

const store: ReduxStore =
  createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider  store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
