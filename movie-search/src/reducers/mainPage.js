const initialState = {
  searchTerm: "",
  results: [],
  loading: false
}

const mainPage = (state = initialState, action) => {
    switch (action.type) {
    case "SEARCH_TERM_CHANGED": {
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    }
    case "MOVIES_PENDING": {
      return {
        ...state,
        results: [],
        loading: true
      }
    }
    case "MOVIES_FULFILLED": {
      return {
        ...state,
        results: action.payload,
        loading: false
      }
    }
    default:
      return state
  }
}
export default mainPage

