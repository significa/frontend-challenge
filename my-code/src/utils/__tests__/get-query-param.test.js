import getQueryParam from '../get-query-param'

describe('getQueryParam', () => {
  it('should get value', () => {
    expect(getQueryParam('?foo=bar', 'foo')).toEqual('bar')
  })

  it('should get first value', () => {
    expect(getQueryParam('?foo=first&foo=second', 'foo')).toEqual('first')
  })

  it('should return empty string when value does not exist in string', () => {
    expect(getQueryParam('?foo', 'foo')).toEqual('')
  })

  it('should return empty string when key does not exist in string', () => {
    expect(getQueryParam('?foo=bar', 'bar')).toEqual('')
  })
})
