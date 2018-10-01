import reducer, { setSearchResults } from '../search-results'

describe('modules', () => {
  describe('searchResults', () => {
    it('should provide the initial state', () => {
      expect(reducer(undefined, {})).toEqual([])
    })

    it('should set search results', () => {
      const action = setSearchResults(['tt0086567', 'tt0434409'])
      const state = reducer(Object.freeze([]), action)

      expect(state).toEqual(['tt0086567', 'tt0434409'])
    })
  })
})
