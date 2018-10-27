import 'raf/polyfill'
import React from 'react'
import MovieRuntime from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<MovieRuntime />', () => {
  it('Should MovieTitle return one h1', () => {
    const wrapper = shallow(<MovieRuntime title='Movie' />)
    expect(wrapper.find('p')).to.have.length(2)
  })
  it('Should MovieRuntime return the component with text 130 min passad via prop', () => {
    const wrapper = shallow(<MovieRuntime movieTime='130 min' />)
    const firstP = wrapper.find('p').at(0)
    expect(firstP.text()).to.equal('130 min')
  })
  it('Should MovieRuntime return the component with text 2013 passad via prop', () => {
    const wrapper = shallow(<MovieRuntime movieYear='2013' />)
    const secondP = wrapper.find('p').at(1)
    expect(secondP.text()).to.equal('2013')
  })
  it('Should MovieRuntime return the component with default text minut that is 0 min when not passing the prop', () => {
    const wrapper = shallow(<MovieRuntime />)
    const firstP = wrapper.find('p').at(0)
    expect(firstP.text()).to.equal('')
  })
  it('Should MovieRuntime return the component with default text year that is 2018 when not passing the prop', () => {
    const wrapper = shallow(<MovieRuntime />)
    const secondP = wrapper.find('p').at(1)
    expect(secondP.text()).to.equal('')
  })
})
