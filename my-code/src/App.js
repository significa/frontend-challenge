// @flow
import React from "react"
import Button from "./components/Button/index"
import IconButton from "./components/IconButton/index"
import SearchBar from "./components/Input/index"
import Topbar from "./layout/topbar"

import Flex from "./layout/Flex"

const App = () => (
  <Flex width={1}>
    <Topbar />
    <SearchBar />
    <Button text="Add to favourites" />
    <IconButton />
  </Flex>
)

export default App
