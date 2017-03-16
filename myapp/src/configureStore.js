import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
var {mediaReducer, testReducer2} = require('./reducers')

export var configure = (initialState = {}) => {
  var reducer = combineReducers({
    media: mediaReducer,
    testReducer2
  });

  var store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk)
  ));

  return store;
};
