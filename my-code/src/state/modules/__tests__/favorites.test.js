import reducer, { toggleFavorite, getIsFavorite } from '../favorites'

describe('modules', () => {
  describe('favorites', () => {
    it('should provide the initial state', () => {
      expect(reducer(undefined, {})).toEqual([])
    })

    it('should add favorite', () => {
      const action = toggleFavorite('tt0434409', true)
      const state = reducer(Object.freeze([]), action)

      expect(getIsFavorite(state, 'tt0434409')).toBe(true)
    })

    it('should remove favorite', () => {
      const action = toggleFavorite('tt0434409', false)
      const state = reducer(Object.freeze(['tt0434409']), action)

      expect(getIsFavorite(state, 'tt0434409')).toBe(false)
    })

    it('should not add duplicate value', () => {
      const action = toggleFavorite('tt0434409', true)
      const state = reducer(Object.freeze(['tt0434409']), action)

      expect(state).toEqual(['tt0434409'])
    })

    it('should do nothing when removing favorite not in state', () => {
      const action = toggleFavorite('tt0434409', false)
      const state = reducer(Object.freeze(['tt0086567']), action)

      expect(state).toEqual(['tt0086567'])
    })
  })
})
