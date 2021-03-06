import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducers from './counterReducer.js'
import Counter from './counter'

const reducers = combineReducers({
  counter: counterReducers
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>
  
, document.getElementById('app'))