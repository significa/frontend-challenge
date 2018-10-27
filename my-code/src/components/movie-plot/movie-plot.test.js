import 'raf/polyfill'
import React from 'react'
import MoviePlot from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<MoviePlot />', () => {
  it('Should MoviePlot return the component with text descript plot passad via prop', () => {
    const wrapper = shallow(<MoviePlot plotText='descript plot' />)
    const text = wrapper.find('p')
    expect(text.text()).to.equal('descript plot')
  })
  it('Should MoviePlot return the component with default text that is empty when not passing the prop', () => {
    const wrapper = shallow(<MoviePlot />)
    const text = wrapper.find('p')
    expect(text.text()).to.equal('')
  })
})
