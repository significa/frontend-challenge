import { LOCATION_CHANGE } from 'connected-react-router'
import { testSaga } from 'redux-saga-test-plan'
import { put, takeLatest } from 'redux-saga/effects'

import rootSaga, { searchMovies, getMovie } from '../sagas'
import { setMovie } from '../modules/movies'
import { setSearchResults } from '../modules/search-results'
import * as api from '../api'
import {
  setAPIStatusDone,
  setAPIStatusLoading,
  setAPIStatusFailed
} from '../modules/api-status'

describe('sagas', () => {
  describe('rootSaga', () => {
    it('should start searchMovies and getMovie', async () => {
      const saga = testSaga(rootSaga)

      saga
        .next()
        .all([
          takeLatest(LOCATION_CHANGE, searchMovies),
          takeLatest(LOCATION_CHANGE, getMovie)
        ])

        .next()
        .isDone()
    })
  })

  describe('getMovie', () => {
    it('should do nothing when called without id param', async () => {
      const saga = testSaga(getMovie, {
        payload: {
          location: {
            search: ''
          }
        }
      })

      saga.next().isDone()
    })

    it('should get movie when called with id param', async () => {
      const saga = testSaga(getMovie, {
        payload: {
          location: {
            search: '?id=tt3987635'
          }
        }
      })

      saga
        .next()
        .put(setAPIStatusLoading())

        .next()
        .call(api.getMovie, 'tt3987635')

        .next({ id: 'tt3987635' })
        .all([
          put(setMovie({ id: 'tt3987635', partial: false })),
          put(setAPIStatusDone())
        ])

        .next()
        .isDone()
    })

    it('should handle a failed fetch', async () => {
      const saga = testSaga(getMovie, {
        payload: {
          location: {
            search: '?id=xxxxxxxxx'
          }
        }
      })

      const error = new Error('Failed to fetch.')
      saga
        .next()

        .throw(error)
        .put(setAPIStatusFailed(error))

        .next()
        .isDone()
    })
  })

  describe('searchMovies', () => {
    it('should clear search results when called without search param', async () => {
      const saga = testSaga(searchMovies, {
        payload: {
          location: {
            search: ''
          }
        }
      })

      saga
        .next()
        .all([put(setSearchResults([])), put(setAPIStatusDone())])

        .next()
        .isDone()
    })

    it('should searche for movies when called with search param', async () => {
      const saga = testSaga(searchMovies, {
        payload: {
          location: {
            search: '?search=search%20term'
          }
        }
      })

      saga
        .next()
        .put(setAPIStatusLoading())

        .next()
        .call(api.search, 'search term')

        .next([{ id: 'tt3987635' }, { id: 'tt9146915' }])
        .all([
          put(setMovie({ id: 'tt3987635', partial: true })),
          put(setMovie({ id: 'tt9146915', partial: true })),
          put(setSearchResults(['tt3987635', 'tt9146915'])),
          put(setAPIStatusDone())
        ])

        .next()
        .isDone()
    })

    it('should handle a failed fetch', async () => {
      const saga = testSaga(searchMovies, {
        payload: {
          location: {
            search: '?search=search%20term'
          }
        }
      })

      const error = new Error('Failed to fetch.')
      saga
        .next()

        .throw(error)
        .put(setAPIStatusFailed(error))

        .next()
        .isDone()
    })
  })
})
