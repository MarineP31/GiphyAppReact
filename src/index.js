import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './styles/index.css';
import App from './containers/App';
import Favorites from './components/GifFavourites/GifFavourites';
import registerServiceWorker from './utilities/registerServiceWorker';

const store = configureStore();
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
