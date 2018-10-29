// @flow
import React from "react"
import DetailsView from "../components/DetailsView"
import omdbApi from "../constants/omdbApi"

type IdType = string

type PropsType = {
  match: {
    params: {
      id: string
    }
  }
}

type StateType = {
  info: {
    Title?: string,
    Runtime?: string,
    Genre?: string,
    Plot?: string,
    Rated?: string,
    Poster?: string,
    Director?: string,
    Actors?: string,
    Year?: string,
    Ratings?: Array<{ Source: string, Value: string }>
  },
  favourite: boolean,
  active: boolean
}

class Detail extends React.Component<PropsType, StateType> {
  state = { info: {}, fav: false, favourites: [], loading: false }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props

    this.setState({
      favourites: this.getFavourites()
    })

    this.loadMovies(id)
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("favourites", JSON.stringify(this.state.favourites))

    if (prevState.favourites !== this.state.favourites) {
      this.setState({ fav: this.getIsFavourite() })
    }
  }

  loadMovies = async (id: IdType) => {
    this.setState({ loading: true })

    const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&i=${id}`
    const res = await fetch(url)
    const data = await res.json()

    this.setState({ loading: false, info: data || {} })
  }

  getFavourites = () => {
    const storage = localStorage.getItem("favourites")
    return storage ? JSON.parse(storage) : []
  }

  getIsFavourite = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props

    return this.state.favourites.filter(fav => fav === id).length > 0
  }

  toggleFavourite = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props

    const { favourites } = this.state
    const isFavourite = this.getIsFavourite()

    const newFavs = isFavourite
      ? favourites.filter(fav => fav !== id)
      : [...favourites, id]

    this.setState({ favourites: newFavs })
  }

  render() {
    return (
      <DetailsView
        getIsFavourite={this.getIsFavourite}
        toggleFavourite={this.toggleFavourite}
        data={this.state}
      />
    )
  }
}

export default Detail
