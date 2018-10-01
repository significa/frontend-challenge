import { addToArray, removeFromArray } from '../immutable-helpers'

describe('addToArray', () => {
  it('should not modify array', () => {
    const arr = []
    expect(addToArray(arr, 0)).not.toBe(arr)
  })

  it('should add value not already in array', () => {
    expect(addToArray([0], 1)).toEqual([0, 1])
  })

  it('should add value already in array', () => {
    const arr = [0]
    expect(addToArray(arr, 0)).toBe(arr)
  })
})

describe('removeFromArray', () => {
  it('should not modify array', () => {
    const arr = [0]
    expect(removeFromArray(arr, 0)).not.toBe(arr)
  })

  it('should remove value from array', () => {
    expect(removeFromArray([0], 0)).toEqual([])
  })

  it('should not modify when removing value not in array', () => {
    const arr = [0]
    expect(removeFromArray(arr, 1)).toBe(arr)
  })
})
