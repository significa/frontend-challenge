import React from 'react'
import Search from 'components/search'
import Showcase from 'components/showcase'

const Home = ({
  handleSearch,
  items,
  searchEmpty,
  loaderShowcase,
  movieEmpty,
  handleGetMovie
}) => (
  <div>
    <Search handleSearch={handleSearch} searchEmpty={searchEmpty} />
    <Showcase
      items={items}
      loaderShowcase={loaderShowcase}
      movieEmpty={movieEmpty}
      handleGetMovie={handleGetMovie} />
  </div>
)

export default Home
