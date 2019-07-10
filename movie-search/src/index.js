import React from "react"
import ReactDOM from "react-dom"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { createLogger } from "redux-logger"

import promise from "redux-promise-middleware"
import App from "./App.js"
import rootReducer from "./reducers/index"

const logger = createLogger()

const store = createStore(rootReducer, applyMiddleware(promise, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
