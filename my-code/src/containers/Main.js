// @flow
import React from "react"
import Input from "../components/Input/styled"

import empty from "../assets/illustration-empty-state@2x.png"

import { Flex } from "../layout/Layout"
import { Text100, Text300 } from "../components/Typography/index"
import Results from "../components/Results"
import omdbApi from "../constants/omdbApi"

type StateType = {
  term: string,
  results: Array<string>
}

class App extends React.Component<{}, StateType> {
  constructor() {
    super()
    this.state = {
      term: "",
      results: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    this.loadMovies()
  }

  loadMovies = async () => {
    const { term } = this.state

    const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&s=${term}`
    const res = await fetch(url)
    const data = await res.json()

    this.setState({ results: data.Search || [] })
  }

  render() {
    const { term } = this.state
    const { results } = this.state

    return (
      <Flex>
        <Flex width={1180}>
          <form style={{ width: "100%" }} onSubmit={this.handleSubmit}>
            <Input
              width={1}
              type="text"
              value={term}
              onChange={(e: SyntheticEvent<HTMLInputElement>) =>
                this.setState({ term: e.currentTarget.value })
              }
              placeholder="Search for movies"
            />
          </form>

          {results.length === 0 ? (
            <Flex mt={6}>
              <img width={396} src={empty} alt="Empty state" />
              <Text300 mb={2}>Don’t know what to search?</Text300>
              <Text100 grey>Here’s an offer you can’t refuse</Text100>
            </Flex>
          ) : (
            <Results data={results} />
          )}
        </Flex>
      </Flex>
    )
  }
}

export default App
