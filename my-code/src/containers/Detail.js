// @flow
import React from "react"
import omdbApi from "../constants/omdbApi"

import Wrapper from "../layout/Wrapper"
import { FlexLeft, FlexRight } from "../layout/Flex"

import { LargeThumbnail } from "../components/Thumbnail/styled"
import Button from "../components/Button/index"
import { IMDBLabel, RottenLabel } from "../components/Label/index"

import { Text100, Text200, Text400 } from "../components/Typography/styled"

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
    console.log(info)

    return (
      <Wrapper width={1180}>
        <FlexLeft width={1 / 2}>
          <a href="/">Go back</a>

          <Wrapper mt={4} mb={4}>
            <Text200 grey>
              {info.Runtime ? info.Runtime : "Unknown runtime"} ·&nbsp;
            </Text200>
            <Text200 grey>
              {info.Year ? info.Year : "Unknown year"} ·&nbsp;
            </Text200>
            <Text200 grey>{info.Rated ? info.Rated : "No rating"}</Text200>
          </Wrapper>

          <Text400 mb={5}>{info.Title}</Text400>
          {info.Ratings ? (
            <Wrapper mb={5}>
              {info.Ratings.map((ratings: RatingsType) => (
                <div>
                  <div>
                    {ratings.Source === "Internet Movie Database" && (
                      <IMDBLabel value={ratings.Value} />
                    )}
                  </div>
                  <div>
                    {ratings.Source === "Rotten Tomatoes" && (
                      <RottenLabel value={ratings.Value} />
                    )}
                  </div>
                </div>
              ))}
              <Button text="Add to favourites" />
            </Wrapper>
          ) : null}

          <FlexLeft mb={5}>
            <Text100 grey mb={2}>
              Plot
            </Text100>
            <Text100>
              {info.Plot ? info.Plot : "There's no information available"}
            </Text100>
          </FlexLeft>

          <Wrapper mb={5}>
            <FlexLeft>
              <Text100 grey mb={2}>
                Cast
              </Text100>
              <Text100>
                {info.Actors ? info.Actors : "There's no information available"}
              </Text100>
            </FlexLeft>

            <FlexLeft>
              <Text100 grey mb={2}>
                Genre
              </Text100>
              <Text100>{info.Genre ? info.Genre : "Unknow genre"}</Text100>
            </FlexLeft>

            <FlexLeft>
              <Text100 grey mb={2}>
                Director
              </Text100>
              <Text100>
                {info.Director ? info.Director : "Unknow director"}
              </Text100>
            </FlexLeft>
          </Wrapper>
        </FlexLeft>

        <FlexRight width={1 / 2}>
          <LargeThumbnail src={info.Poster} alt="The movie poster" />
        </FlexRight>
      </Wrapper>
    )
  }
}

export default Detail
