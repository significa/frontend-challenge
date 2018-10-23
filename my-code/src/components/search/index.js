import React from 'react'
import IconSvg from '../icon-svg'
import './search.scss'

const Search = ({ handleSearch, searchEmpty }) => (
  <section className='search'>
    <form onSubmit={handleSearch} >
      <button className={`search__button ${searchEmpty}`}><IconSvg name='icon-magnifier-grey' /></button>
      <input type='text' name='search' className={`search__input ${searchEmpty}`} placeholder='Search movies...' autoComplete='off' />
    </form>
  </section>
)

export default Search
