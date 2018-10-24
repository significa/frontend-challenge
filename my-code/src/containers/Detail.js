// @flow
import React from "react"
import omdbApi from "../constants/omdbApi"

import Wrapper from "../layout/Wrapper"
import Flex from "../layout/Flex"

type IdType = string

type PropsType = {
  match: {
    params: {
      id: string
    }
  }
}

type RatingsType = {}

class Detail extends React.Component<PropsType> {
  constructor() {
    super()
    this.state = {
      info: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    console.log(this.props.match)
    this.loadMovies(id)
  }

  loadMovies = async (id: IdType) => {
    const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&i=${id}`
    const res = await fetch(url)
    const data = await res.json()

    this.setState({ info: data || {} })
  }

  render() {
    const { info } = this.state

    return (
      <Wrapper>
        <a href="/">Go back</a>
        <div>
          <Wrapper>
            <p>{info.Runtime}</p>
            <p>{info.Year}</p>
          </Wrapper>
          <p>{info.Title}</p>
          {info.Ratings ? (
            <div>
              {info.Ratings.map((ratings: RatingsType) => (
                <p>{ratings.Source}</p>
              ))}
            </div>
          ) : null}

          <p>Plot</p>
          <p>{info.Plot}</p>

          <Wrapper>
            <Flex>
              <p>Cast</p>
              <p>{info.Actors}</p>
            </Flex>

            <p>Genre</p>
            <p>{info.Genre}</p>

            <p>Director</p>
            <p>{info.Director}</p>
          </Wrapper>
        </div>

        <div style={{ width: "480px" }}>
          <img src={info.Poster} alt="The movie poster" />
        </div>
      </Wrapper>
    )
  }
}

export default Detail
