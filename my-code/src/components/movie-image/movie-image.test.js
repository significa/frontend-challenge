import 'raf/polyfill'
import React from 'react'
import MovieImage from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<MovieImage />', () => {
  it('Should MovieImage return one img', () => {
    const wrapper = shallow(<MovieImage />)
    expect(wrapper.find('img')).to.have.length(1)
  })
  it('Should MovieImage return the image with src www.url.com.br passad via prop', () => {
    const wrapper = shallow(<MovieImage imageURl='www.url.com.br' />)
    expect(wrapper.find('img').html()).to.equal('<img src="www.url.com.br" alt=""/>')
  })
  it('Should MovieImage return the image with alt title image passad via prop', () => {
    const wrapper = shallow(<MovieImage imageURl='www.url.com.br' imageAlt='title image' />)
    expect(wrapper.find('img').html()).to.equal('<img src="www.url.com.br" alt="title image"/>')
  })
  it('Should MovieImage return the component with default src that is empty when not passing the prop', () => {
    const wrapper = shallow(<MovieImage />)
    expect(wrapper.find('img').html()).to.equal('<img src="" alt=""/>')
  })
  it('Should MovieImage return the component with default alt that is empty when not passing the prop', () => {
    const wrapper = shallow(<MovieImage />)
    expect(wrapper.find('img').html()).to.equal('<img src="" alt=""/>')
  })
})
