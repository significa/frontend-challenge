import { createStore } from 'redux'
import getReducers from '../'

import apiStatus from '../api-status'
import searchResults from '../search-results'
import movies from '../movies'
import favorites from '../favorites'

describe('modules', () => {
  describe('getReducers', () => {
    it('should provide the initial state', () => {
      const store = createStore(getReducers())
      const state = store.getState()

      expect(state.apiStatus).toEqual(apiStatus(undefined, {}))
      expect(state.searchResults).toEqual(searchResults(undefined, {}))
      expect(state.movies).toEqual(movies(undefined, {}))
      expect(state.favorites).toEqual(favorites(undefined, {}))
    })
  })
})
