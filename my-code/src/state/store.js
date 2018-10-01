import {
  applyMiddleware,
  compose,
  createStore as createReduxStore
} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import persistState from 'redux-localstorage'

import getReducers from './modules'
import rootSaga from './sagas'

export default function createStore(history) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware)
  const enhancer = compose(
    middleware,
    persistState(['favorites'])
  )
  const reducer = compose(
    connectRouter(history),
    getReducers
  )()
  const store = createReduxStore(reducer, enhancer)

  sagaMiddleware.run(rootSaga)

  return store
}
