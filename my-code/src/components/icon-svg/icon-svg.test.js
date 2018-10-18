import React from 'react'
import IconSvg from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('Componente <Icon />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<IconSvg name='logo' />)
  })
  it('Should that the component return svg', () => {
    expect(wrapper.find('svg')).to.have.length(1)
  })
  it('Should that the component return svg the value of name passed the prop', () => {
    expect(wrapper.instance().props.name).to.equal('logo')
  })
})
