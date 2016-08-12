import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Layout, Home, TodoManager, TodoManagerWithSelector } from './component';
import store from './store';
import packageJson from '../../../package.json';
import '../../scss/index.scss';

// http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();

// instead of using `browserHistory` from react-router, create one
// with basename to allow app to specify different context root
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: packageJson.config.context_root
});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="todo-manager" component={TodoManager} />
        <Route path="todo-manager-with-selector" component={TodoManagerWithSelector} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
