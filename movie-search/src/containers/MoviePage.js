// @flow
import React from "react"
import MovieView from "../components/Movie"
import { omdbApi } from "../API"

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
  fav: boolean,
  favourites: Array<string>,
  loading: boolean
}

type PrevPropsType = {
  match: {
    params: {
      id: string
    }
  }
}

type PrevStateType = {
  fav: boolean,
  favourites: Array<string>,
  loading: boolean
}

type FavType = string

class MoviePage extends React.Component<PropsType, StateType> {
  state = {
    info: {},
    fav: false,
    favourites: [],
    loading: false
  }

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

  componentDidUpdate(prevProps: PrevPropsType, prevState: PrevStateType) {
    const { favourites } = this.state
    localStorage.setItem("favourites", JSON.stringify(favourites))

    if (prevState.favourites !== favourites) {
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

    const { favourites } = this.state

    return favourites.filter((fav: FavType) => fav === id).length > 0
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
      ? favourites.filter((fav: FavType) => fav !== id)
      : [...favourites, id]

    this.setState({ favourites: newFavs })
  }

  render() {
    const { info } = this.state
    const { fav } = this.state
    const { loading } = this.state

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

export default MoviePage
