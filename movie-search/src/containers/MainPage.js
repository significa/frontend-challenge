import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Input from "../components/common/Input"
import empty from "../assets/illustration-empty-state@2x.png"

import { Flex } from "../components/Layout"
import { Text100, Text300 } from "../components/common/Typography"
import Loader from "../components/common/Loader"
import Results from "../components/Results"
import { actionsMainPage } from "../store"

class MainPage extends Component {
  formSubmitted(event) {
    event.preventDefault()
    this.props.onGetMovies(this.props.searchTerm)
  }

  render() {
    const { searchTerm, results, loading } = this.props
    return (
      <Flex>
        <Flex width={1}>
          <form
            style={{ width: "100%" }}
            onSubmit={event => this.formSubmitted(event)}
          >
            <Input
              width={1}
              type="text"
              value={searchTerm}
              onChange={event =>
                this.props.onSearchTermChanged(event.target.value)
              }
              placeholder="Search for movies"
            />
          </form>

          {loading && <Loader />}
          {results.length === 0 && !loading ? (
            <Flex mt={6}>
              <img width="66%" src={empty} alt="Empty state" />
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
    searchTerm: state.mainPage.searchTerm,
    results: state.mainPage.results,
    loading: state.mainPage.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChanged(searchTerm) {
      dispatch(actionsMainPage.searchTermChanged(searchTerm))
    },
    onGetMovies(searchTerm) {
      dispatch(actionsMainPage.getMovies(searchTerm))
    }
  }
}

MainPage.propTypes = {
  onGetMovies: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onSearchTermChanged: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
