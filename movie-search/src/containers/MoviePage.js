/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import MovieView from "../components/Movie"
import Loader from "../components/common/Loader"
import { Flex } from "../components/Layout"

import { actionsSingleMoviePage } from "../store"

class MoviePage extends Component {
  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props

    await this.props.onGetFavorites()
    await this.props.onGetSingleMovie(id)
  }

  componentDidUpdate() {
    const { favorites } = this.props
    localStorage.setItem("favorites", JSON.stringify(favorites))

    if (this.props.favorites !== favorites) {
      this.setState({ fav: this.getIsFavorite() })
    }
  }

  getIsFavorite = () => {
    const {
      match: {
        params: { id }
      },
      favorites
    } = this.props
    return favorites.filter(fav => fav === id).length > 0
  }

  toggleFavorite = () => {
    console.log("BUTTON PRESSED");
    const {
      match: {
        params: { id }
      },
      favorites
    } = this.props

    const isFavorite = this.getIsFavorite()

    const newFavs = isFavorite
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id]

    this.props.onToggleFavorite(newFavs)
  }

  render() {
    const { info, fav, loading } = this.props
    return (
      <Flex>
        {loading ? (
          <Loader />
        ) : (
          <MovieView
            getIsFavorite={this.getIsFavorite}
            toggleFavorite={this.toggleFavorite}
            info={info}
            favorite={fav}
            loading={loading}
          />
        )}
      </Flex>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.moviePage.id,
    info: state.moviePage.info,
    fav: state.moviePage.fav,
    favorites: state.moviePage.favorites,
    loading: state.moviePage.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetSingleMovie(id) {
      dispatch(actionsSingleMoviePage.getSingleMovie(id))
    },
    onGetFavorites() {
      dispatch(actionsSingleMoviePage.getFavorites())
    },
    onToggleFavorite() {
      dispatch(actionsSingleMoviePage.toggleFavorite())
    }
  }
}

MoviePage.propTypes = {
  match: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  fav: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onGetSingleMovie: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  onGetFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage)
