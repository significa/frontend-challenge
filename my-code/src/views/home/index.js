import React from 'react'
import Search from 'components/search'
import Showcase from 'components/showcase'

const Home = ({ handleSearch, items }) => (
  <div>
    <Search handleSearch={handleSearch} />
    <Showcase items={items} />
  </div>
)

export default Home
