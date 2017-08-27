import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { text } from './constants';
import reducer from './reducers';

require('../styles/main.scss');
require.context('../graphics/', true, /\.(png|jpg|jpeg|gif|svg|ico)$/);
// require.context('../fonts/', true, /\.(eot|svg|ttf|woff|woff2)$/);

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
    return (process.env.NODE_ENV !== 'production');
  }
});

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  logger
));

import Header from './components/header';
import Home from './views/home';
import UhOh from './views/uhoh';

render((
  <div>
    <Header title={text.title} />
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={UhOh} />
        </Switch>
      </HashRouter>
    </Provider>
  </div>
), document.body.appendChild(document.createElement('main')));
