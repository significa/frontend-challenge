import React from 'react'
import Search from 'components/search'
import Showcase from 'components/showcase'

const Home = ({ handleSearch, items, searchEmpty }) => (
  <div>
    <Search handleSearch={handleSearch} searchEmpty={searchEmpty} />
    <Showcase items={items} />
  </div>
)

export default Home
