import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import App from './App';

import './index.css';

import rootReducer from './reducers';
import rootSagas from './sagas';

const initialState = {};

const sagaMiddleware = createSagaMiddleware({});

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
