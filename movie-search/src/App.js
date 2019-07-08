import React, { Component } from "react"
import { connect } from "react-redux"

import { actions } from "./store"
import Provider from "./components/Provider"
import Routes from "./components/Routes"

class App extends Component {
  formSubmitted(event) {
    this.props.onGetMovies(this.props.searchTerm)
    event.preventDefault()
  }

  render() {
    return (
      <React.Fragment>
        <Provider>
          <Routes />
        </Provider>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    loading: state.loading,
    movies: state.movies
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
)(App)
