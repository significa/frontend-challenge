import React from "react"
import ReactDOM from "react-dom"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import promise from "redux-promise-middleware"

import App from "./App.js"
import rootReducer from "./reducers/index"

function createStoreWithMiddleware() {
  let middleware = [promise];
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV !== "production") {
    let logger = require('redux-logger').createLogger();
    middleware = [...middleware, logger];
  }
  return createStore(rootReducer,  applyMiddleware(...middleware));
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware()}>
    <App />
  </Provider>,
  document.getElementById("root")
)
