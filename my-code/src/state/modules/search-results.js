const SET_SEARCH_RESULTS = 'whats-in/search-results/SET'

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return action.payload
    default:
      return state
  }
}
export function setSearchResults(results) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  }
}
