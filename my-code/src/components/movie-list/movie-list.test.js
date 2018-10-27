import 'raf/polyfill'
import React from 'react'
import MovieList from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<MovieList />', () => {
  it('Should MovieList return title equal passad in the prop', () => {
    const wrapper = shallow(<MovieList listTitle='Movie' />)
    expect(wrapper.find('h3').text()).to.equal('Movie')
  })
  it('Should MovieList return the empty title if not passed the prop', () => {
    const wrapper = shallow(<MovieList />)
    expect(wrapper.find('h3').text()).to.equal('')
  })
  it('Should return 2 paragraph when passed two name in prop list', () => {
    const wrapper = shallow(<MovieList list='Henrique, Melanda' />)
    expect(wrapper.find('p')).to.have.length(2)
  })
  it('Should return the name Henrique in the first paragraph', () => {
    const wrapper = shallow(<MovieList list='Henrique, Melanda' />)
    const firstP = wrapper.find('p').at(0)
    expect(firstP.text()).to.equal('Henrique')
  })
  it('Should return the name Melanda in the second paragraph', () => {
    const wrapper = shallow(<MovieList list='Henrique, Melanda' />)
    const secondP = wrapper.find('p').at(1)
    expect(secondP.text()).to.equal('Melanda')
  })
})
