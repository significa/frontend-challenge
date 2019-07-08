import React from "react"
import ReactDOM from "react-dom"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { createLogger } from "redux-logger"

import promise from "redux-promise-middleware"
import registerServiceWorker from "./registerServiceWorker"

import App from "./App.js"
import { reducer } from "./store"

const logger = createLogger()

const store = createStore(reducer, applyMiddleware(promise, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
