import 'raf/polyfill'
import React from 'react'
import Empty from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Empty />', () => {
  it('Should Empty return one empty', () => {
    const wrapper = shallow(<Empty statusEmpty='hide' />)
    expect(wrapper.find('.empty')).to.have.length(1)
  })
  it('Should Empty return the component with class hide passad via prop', () => {
    const wrapper = shallow(<Empty statusEmpty='hide' />)
    expect(wrapper.find('.hide')).to.have.length(1)
  })
})
