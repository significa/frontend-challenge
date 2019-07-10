import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import MovieView from "../components/Movie"

import { actions } from "../store"

class MoviePage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props

    this.setState({
      favorites: this.getFavorites()
    })

    this.getSingleMovie(id)
  }

  componentDidUpdate() {
    const { favorites } = this.props
    localStorage.setItem("favorites", JSON.stringify(favorites))

    if (this.props.favorites !== favorites) {
      this.setState({ fav: this.getIsFavourite() })
    }
  }

  getSingleMovie = async id => {
    this.props.onGetSingleMovie(id)
  }

  getFavorites = () => {
    const storage = localStorage.getItem("favorites")
    return storage ? JSON.parse(storage) : []
  }

  getIsFavourite = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props

    const { favorites } = this.state

    return favorites.filter(fav => fav === id).length > 0
  }

  toggleFavourite = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props

    const { favorites } = this.state
    const isFavourite = this.getIsFavourite()

    const newFavs = isFavourite
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id]

    this.setState({ favorites: newFavs })
  }

  render() {
    const { info, fav, loading } = this.props

    return (
      <MovieView
        getIsFavourite={this.getIsFavourite}
        toggleFavourite={this.toggleFavourite}
        info={info}
        favourite={fav}
        loading={loading}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    info: state.info,
    fav: state.fav,
    favorites: state.favorites,
    loading: state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChanged(searchTerm) {
      dispatch(actions.searchTermChanged(searchTerm))
    },
    onGetSingleMovie(id) {
      dispatch(actions.getSingleMovie(id))
    }
  }
}

MoviePage.propTypes = {
  match: PropTypes.object.isRequired
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage)
