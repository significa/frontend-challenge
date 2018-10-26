import 'raf/polyfill'
import React from 'react'
import MovieTitle from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<MovieTitle />', () => {
  it('Should MovieTitle return one h1', () => {
    const wrapper = shallow(<MovieTitle title='Movie' />)
    expect(wrapper.find('h1')).to.have.length(1)
  })
  it('Should MovieTitle return the component with text Movie passad via prop', () => {
    const wrapper = shallow(<MovieTitle title='Movie' />)
    expect(wrapper.text()).to.equal('Movie')
  })
  it('Should MovieTitle return the component with default text that is empty when not passing the prop', () => {
    const wrapper = shallow(<MovieTitle />)
    expect(wrapper.text()).to.equal('')
  })
})