import React from "react";
import ReactDOM from "react-dom";
import { Provider as Store } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";

import reducers from "./reducers";
import Provider from "./components/UI/Provider";
import Routes from "./routes";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Store store={store}>
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);

registerServiceWorker();
