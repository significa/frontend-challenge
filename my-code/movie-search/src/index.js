import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as Store } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers';
import Provider from './components/UI/Provider';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Store store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  </Store>, document.getElementById('root')
);

registerServiceWorker();
