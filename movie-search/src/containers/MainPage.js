// @flow
import React, { Component } from "react"

import Input from "../components/common/Input"
import empty from "../assets/illustration-empty-state@2x.png"

import { Flex } from "../components/Layout"
import { Text100, Text300 } from "../components/common/Typography"
import Loader from "../components/common/Loader"
import Results from "../components/Results"
import { omdbApi } from "../API"

type StateType = {
  searchTerm: string,
  results: Array<{
    Poster: string,
    Title: string,
    Year: string,
    imdbID: string
  }>,
  loading: boolean
}

class App extends Component<{}, StateType> {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      results: [],
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    this.loadMovies()
  }

  loadMovies = async () => {
    const { searchTerm } = this.state
    this.setState({ loading: true })

    const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&s=${searchTerm}`
    const res = await fetch(url)
    const data = await res.json()

    this.setState({ loading: false, results: data.Search || [] })
  }

  render() {
    const { searchTerm } = this.state
    const { results } = this.state
    const { loading } = this.state

    return (
      <Flex>
        <Flex width={1180}>
          <form style={{ width: "100%" }} onSubmit={this.handleSubmit}>
            <Input
              width={1}
              type="text"
              value={searchTerm}
              onChange={(e: SyntheticEvent<HTMLInputElement>) =>
                this.setState({ searchTerm: e.currentTarget.value })
              }
              placeholder="Search for movies"
            />
          </form>

          {loading && <Loader />}

          {results.length === 0 && !loading ? (
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
