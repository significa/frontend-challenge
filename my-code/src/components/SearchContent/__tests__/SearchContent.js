import React from 'react'
import { shallow } from 'enzyme'

import SearchContent from '../'

describe('SearchContent', () => {
  it('renders correctly', () => {
    const tree = shallow(<SearchContent error={false} search results />)
    expect(tree).toMatchSnapshot()
  })

  it('renders error correctly', () => {
    const tree = shallow(
      <SearchContent
        error
        search={false}
        results={false}
        errorMessage="Error message goes here"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders no search correctly', () => {
    const tree = shallow(
      <SearchContent error={false} search={false} results={false} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders no results correctly', () => {
    const tree = shallow(<SearchContent error={false} search results={false} />)
    expect(tree).toMatchSnapshot()
  })
})
