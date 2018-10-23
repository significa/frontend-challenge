import React from 'react'
import IconSvg from '../icon-svg'
import './search.scss'

const Search = ({ handleSearch }) => (
  <section className='search'>
    <form onSubmit={handleSearch} >
      <button className='search__button'><IconSvg name='icon-magnifier-grey' /></button>
      <input type='text' name='search' className='search__input' placeholder='Search movies...' />
    </form>
  </section>
)

export default Search
