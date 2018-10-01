import { LOCATION_CHANGE } from 'connected-react-router'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as api from './api'
import {
  setAPIStatusDone,
  setAPIStatusLoading,
  setAPIStatusFailed
} from './modules/api-status'
import { setSearchResults } from './modules/search-results'
import { setMovie } from './modules/movies'
import getQueryParam from '../utils/get-query-param'

export function* searchMovies({ payload }) {
  const search = getQueryParam(payload.location.search, 'search')

  // Empty search
  if (!search) {
    yield all([put(setSearchResults([])), put(setAPIStatusDone())])
    return
  }

  try {
    yield put(setAPIStatusLoading())
    const movies = yield call(api.search, search)

    yield all([
      ...movies.map(movie => put(setMovie({ ...movie, partial: true }))),
      put(setSearchResults(movies.map(({ id }) => id))),
      put(setAPIStatusDone())
    ])
  } catch (err) {
    yield put(setAPIStatusFailed(err))
  }
}

export function* getMovie({ payload }) {
  const id = getQueryParam(payload.location.search, 'id')
  if (!id) return

  try {
    yield put(setAPIStatusLoading())
    const movie = yield call(api.getMovie, id)

    yield all([
      put(setMovie({ ...movie, partial: false })),
      put(setAPIStatusDone())
    ])
  } catch (err) {
    yield put(setAPIStatusFailed(err))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(LOCATION_CHANGE, searchMovies),
    takeLatest(LOCATION_CHANGE, getMovie)
  ])
}
