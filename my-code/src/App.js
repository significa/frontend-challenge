// @flow
import React from "react"
import Button from "./components/Button/index"
import IconButton from "./components/IconButton/index"
import SearchBar from "./components/Input"

const App = () => (
  <div>
    <Button text="Add to favourites" />
    <SearchBar />
    <IconButton />
  </div>
)

export default App
