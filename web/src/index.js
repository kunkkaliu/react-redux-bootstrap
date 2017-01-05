import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory, useRouterHistory, browserHistory} from 'react-router';
import configureStore from './store/configureStore';

import App from './views/App';
import Home from './views/Home';
import Topics from './components/Topics';
import Topic from './components/Topic';
import Remote from './components/Remote';
import Jobs from './components/Jobs';
import '../css/bootstrap.css';
import './index.less';

const store = configureStore();

const validate = function (next, replace, callback) {
    callback();
};

ReactDOM.render(
  <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
          <Route path="/" component={App} onEnter={validate}>
              <IndexRoute component={Home} onEnter={validate}/>
              <Route path="topics" component={Topics}/>
              <Route path="topics?type=:name" component={Topics}/>
              <Route path="topics/:id" component={Topic}/>
              <Route path="remote" component={Remote}/>
              <Route path="jobs" component={Jobs}/>
              <Route path="sites" component={Jobs}/>
          </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
