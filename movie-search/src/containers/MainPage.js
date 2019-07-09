import React, { Component } from "react"
import { connect } from "react-redux"

import Input from "../components/common/Input"
import empty from "../assets/illustration-empty-state@2x.png"

import { Flex } from "../components/Layout"
import { Text100, Text300 } from "../components/common/Typography"
import Loader from "../components/common/Loader"
import Results from "../components/Results"
import { actions } from "../store"

class MainPage extends Component {
  formSubmitted(event) {
    event.preventDefault()
    this.props.onGetMovies(this.props.searchTerm)
  }

  render() {
    const { searchTerm, results, loading } = this.props
    return (
      <Flex>
        <Flex width={1180}>
          <form onSubmit={event => this.formSubmitted(event)}>
            <Input
              width={1}
              type="text"
              value={searchTerm}
              onChange={event =>
                this.props.onSearchTermChanged(event.target.value)
              }
              placeholder="Search for movies"
            />
            <button type="submit">Search</button>
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

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    results: state.results,
    loading: state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChanged(searchTerm) {
      dispatch(actions.searchTermChanged(searchTerm))
    },
    onGetMovies(searchTerm) {
      dispatch(actions.getMovies(searchTerm))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
