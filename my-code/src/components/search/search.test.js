import React from 'react'
import Search from './index'
import IconSvg from '../icon-svg'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('Component <Search />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Search />)
  })
  it('Should component Search contain button', () => {
    expect(wrapper.find('.search__button')).to.have.length(1)
  })
  it('Should component Search contain input', () => {
    expect(wrapper.find('.search__input')).to.have.length(1)
  })
  it('Should return the SVG with name soon inside the magnifier grey button', () => {
    const svg = wrapper.find(IconSvg)
    expect(svg.props().name).to.equal('icon-magnifier-grey')
  })
})
