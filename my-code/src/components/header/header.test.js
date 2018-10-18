import React from 'react'
import Header from './index'
import IconSvg from '../icon-svg'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('Component <Header />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })
  it('Should component Header contain div header__logo', () => {
    expect(wrapper.find('.header__logo')).to.have.length(1)
  })
  it('Should return the SVG with name soon inside the logo div', () => {
    const svg = wrapper.find(IconSvg)
    expect(svg.props().name).to.equal('logo')
  })
})
