import deepFreeze from 'deep-freeze'
import reducer, { setMovie, getMovie, getIsLoaded } from '../movies'

describe('modules', () => {
  describe('movies', () => {
    it('should provide the initial state', () => {
      expect(reducer(undefined, {})).toEqual({})
    })

    it('should add movie', () => {
      const action = setMovie({ id: 'tt0086567' })
      const state = reducer(
        deepFreeze({ tt0434409: { id: 'tt0434409' } }),
        action
      )

      expect(state).toEqual({
        tt0086567: {
          id: 'tt0086567'
        },
        tt0434409: {
          id: 'tt0434409'
        }
      })
    })

    it('should override partial with full', () => {
      const action = setMovie({ id: 'tt0086567', partial: false })
      const state = reducer(
        deepFreeze({
          tt0086567: {
            id: 'tt0086567',
            partial: true
          }
        }),
        action
      )

      expect(state).toEqual({
        tt0086567: {
          id: 'tt0086567',
          partial: false
        }
      })
    })

    it('should not override full with partial', () => {
      const previousState = deepFreeze({
        tt0086567: {
          id: 'tt0086567',
          partial: false
        }
      })
      const action = setMovie({ id: 'tt0086567', partial: true })
      const state = reducer(previousState, action)

      expect(state).toBe(previousState)
    })

    describe('getMovie', () => {
      it('should get movie with link', () => {
        expect(
          getMovie(
            {
              tt0086567: {
                id: 'tt0086567'
              }
            },
            'tt0086567'
          )
        ).toEqual({
          id: 'tt0086567',
          link: '/movie?id=tt0086567'
        })
      })
    })

    describe('getIsLoaded', () => {
      it('should return false if movie is not an object', () => {
        expect(getIsLoaded({}, 'tt0086567')).toBe(false)
      })

      it('should return false if movie is partial', () => {
        expect(
          getIsLoaded(
            {
              tt0086567: { partial: true }
            },
            'tt0086567'
          )
        ).toBe(false)
      })

      it('should return true if movie is not partial', () => {
        expect(
          getIsLoaded(
            {
              tt0086567: { partial: false }
            },
            'tt0086567'
          )
        ).toBe(true)
      })
    })
  })
})
