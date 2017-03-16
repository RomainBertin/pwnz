
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Wrapper from './Wrapper';
import App from './App';
import NoMatch from './NoMatch';
import './index.css';

var store = require('./configureStore').configure();

render();

function render() {
  ReactDOM.render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Wrapper}>
          <IndexRoute component={App} />
          <Route path="index" component={App}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('root'))
}
