import 'raf/polyfill'
import React from 'react'
import Showcase from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Showcase />', () => {
  let wrapper, wrapper2, data, data2
  beforeEach(() => {
    data = [
      {
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg',
        'Title': 'Fast & Furious 6',
        'Type': 'Movie',
        'Year': '2013',
        'imdbID': 'tt1905041'
      }
    ]
    data2 = [
      {
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg',
        'Title': 'Fast & Furious 6',
        'Type': 'Movie',
        'Year': '2013',
        'imdbID': 'tt1905041'
      },
      {
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX400.jpg',
        'Title': 'Fast & Furious 7',
        'Type': 'Movie',
        'Year': '2014',
        'imdbID': 'tt1905042'
      }
    ]
    wrapper = shallow(<Showcase items={data} />)
    wrapper2 = shallow(<Showcase items={data2} />)
  })

  it('Should wrapper return one li', () => {
    expect(wrapper.find('li')).to.have.length(1)
  })
  it('Should wrapper contain image equal to the past in the data Poster field', () => {
    const image = wrapper.find('figure')
    expect(image.contains(<img src='https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg' alt='Fast & Furious 6' />)).to.equal(true)
  })
  it('Should the wrapper component contain a Title equal to the last one by data', () => {
    const title = wrapper.find('h2')
    expect(title.text()).to.equal('Fast & Furious 6')
  })
  it('Should the wrapper component contain a Year equal to the last in the data', () => {
    const year = wrapper.find('small')
    expect(year.text()).to.equal('2013')
  })
  it('Should the wrapper component contain a Link with ID equal to the last in the imdbID field in the data', () => {
    const link = wrapper.find('Link')
    expect(link.prop('to')).to.equal('/movie-tt1905041')
  })
  it('Should wrapper return two li', () => {
    expect(wrapper2.find('li')).to.have.length(2)
  })
  it('Should wrapper2 contain two image equal to the past in the data2 Poster field', () => {
    const image1 = wrapper2.find('figure').at(0)
    const image2 = wrapper2.find('figure').at(1)
    expect(image1.contains(<img src='https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg' alt='Fast & Furious 6' />)).to.equal(true)
    expect(image2.contains(<img src='https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX400.jpg' alt='Fast & Furious 7' />)).to.equal(true)
  })
  it('Should the wrapper2 component contain two Title equal to the last one by data2', () => {
    const title1 = wrapper2.find('h2').at(0)
    const title2 = wrapper2.find('h2').at(1)
    expect(title1.text()).to.equal('Fast & Furious 6')
    expect(title2.text()).to.equal('Fast & Furious 7')
  })
  it('Should the wrapper2 component contain Two Year equal to the last in the data2', () => {
    const year1 = wrapper2.find('small').at(0)
    const year2 = wrapper2.find('small').at(1)
    expect(year1.text()).to.equal('2013')
    expect(year2.text()).to.equal('2014')
  })
  it('Should the wrapper component contain two Link with ID equal to the last in the imdbID field in the data2', () => {
    const link1 = wrapper2.find('Link').at(0)
    const link2 = wrapper2.find('Link').at(1)
    expect(link1.prop('to')).to.equal('/movie-tt1905041')
    expect(link2.prop('to')).to.equal('/movie-tt1905042')
  })
})
