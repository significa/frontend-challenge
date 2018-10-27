import 'raf/polyfill'
import React from 'react'
import MovieRatings from './index'
import IconSvg from '../icon-svg'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<MovieRatings />', () => {
  it('Should MovieRatings return one section', () => {
    const wrapper = shallow(<MovieRatings />)
    expect(wrapper.find('section')).to.have.length(1)
  })
  it('Should MovieRatings return one figure', () => {
    const wrapper = shallow(<MovieRatings />)
    expect(wrapper.find('figure')).to.have.length(1)
  })
  it('Should MovieRatings return one p', () => {
    const wrapper = shallow(<MovieRatings />)
    expect(wrapper.find('p')).to.have.length(1)
  })
  it('Should MovieRatings return the component with text 10/6 passad via prop', () => {
    const wrapper = shallow(<MovieRatings ratingsText='10/6' />)
    expect(wrapper.text()).to.equal('<IconSvg />10/6')
  })
  it('Should return the SVG with name logo-imdb', () => {
    const wrapper = shallow(<MovieRatings ratingsSvg='logo-imdb' />)
    const svg = wrapper.find(IconSvg)
    expect(svg.props().name).to.equal('logo-imdb')
  })
  it('Should return the BG with the yellow name passed via prop', () => {
    const wrapper = shallow(<MovieRatings ratingsBG='yellow' />)
    expect(wrapper.find('.yellow')).to.have.length(1)
  })
  it('Should MovieRatings return the component with default text that is empty when not passing the prop ratingsText', () => {
    const wrapper = shallow(<MovieRatings />)
    expect(wrapper.text()).to.equal('<IconSvg />')
  })
})
