import React from 'react'
import IconSvg from '../icon-svg'
import './search.scss'

const Search = () => (
  <section className='search'>
    <form>
      <button className='search__button'><IconSvg name='icon-magnifier-grey' /></button>
      <input type='text' className='search__input' placeholder='Search movies...' />
    </form>
  </section>
)

export default Search
