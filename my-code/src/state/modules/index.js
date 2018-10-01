import { combineReducers } from 'redux'

import apiStatus from './api-status'
import searchResults from './search-results'
import movies from './movies'
import favorites from './favorites'

export default function getReducers() {
  return combineReducers({
    apiStatus,
    searchResults,
    movies,
    favorites
  })
}
