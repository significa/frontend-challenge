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

type PrevStateType = {
  favourite: boolean,
  active: boolean
}

class Detail extends React.Component<PropsType, StateType> {
  constructor() {
    super()
    this.state = {
      info: {},
      favourite: false,
      active: false,
      loading: false
    }
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props

    this.loadMovies(id)
  }

  loadMovies = async (id: IdType) => {
    this.setState({ loading: true })

    const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&i=${id}`
    const res = await fetch(url)
    const data = await res.json()

    this.setState({ loading: false, info: data || {} })
  }

  saveToFavourites = () => {
    const { favourite } = this.state

    this.setState(
      (prevState: PrevStateType) => ({
        favourite: !prevState.favourite
      }),
      () => localStorage.setItem("favourite", JSON.stringify(!favourite))
    )
  }

  render() {
    return <DetailsView data={this.state} />
  }
}

export default Detail
