import reducer, {
  setAPIStatusDone,
  setAPIStatusLoading,
  setAPIStatusFailed,
  getIsDone,
  getIsLoading,
  getIsFailed,
  getErrorMessage
} from '../api-status'

describe('modules', () => {
  describe('apiStatus', () => {
    it('should provide the initial state', () => {
      const state = reducer(undefined, {})

      expect(getIsDone(state)).toBe(true)
    })

    it('should set done state', () => {
      const action = setAPIStatusDone()
      const state = reducer(Object.freeze({}), action)

      expect(getIsDone(state)).toBe(true)
    })

    it('should set loading state', () => {
      const action = setAPIStatusLoading()
      const state = reducer(Object.freeze({}), action)

      expect(getIsLoading(state)).toBe(true)
    })

    it('should set failed state', () => {
      const action = setAPIStatusFailed(new Error('Failed to fetch'))
      const state = reducer(Object.freeze({}), action)

      expect(getIsFailed(state)).toBe(true)
      expect(getErrorMessage(state)).toBe('Failed to fetch')
    })
  })
})
