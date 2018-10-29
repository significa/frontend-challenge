// @flow
import React from "react"
import { Link } from "react-router-dom"
import Loader from "./common/Loader"
import Button from "./common/Button"
import { IMDBLabel, RottenLabel } from "./common/Label"
import { Text100, Text200, Text400 } from "./common/Typography"
import Arrow from "./common/Icons/Arrow"
import { Wrapper, FlexLeft, FlexRight } from "./Layout"
import { LargeThumbnail, LargeEmptyThumbnail } from "./common/Thumbnail"

import type {
  RatingsType,
  ActorType,
  GenreType,
  DirectorType
} from "../types.js"

const DetailsView = ({
  data: { info },
  loading,
  active,
  saveToFavourites
}: PropTypes) => (
  <div>
    {loading ? (
      <Loader />
    ) : (
      <Wrapper width={1180}>
        <FlexLeft width={1 / 2}>
          <Link to="/">
            <Arrow />
          </Link>

          <Wrapper mt={6} mb={4}>
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
              <Button
                text="Add to favourites"
                onClick={saveToFavourites}
                active={active}
              />
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
            <FlexLeft pr={56}>
              <Text100 grey mb={2}>
                Cast
              </Text100>
              <div>
                {info.Actors
                  ? info.Actors.split(",").map((actor: ActorType) => (
                      <Text100>{actor}</Text100>
                    ))
                  : "There's no information available"}
              </div>
            </FlexLeft>

            <FlexLeft pr={56}>
              <Text100 grey mb={2}>
                Genre
              </Text100>
              <div>
                {info.Genre
                  ? info.Genre.split(",").map((genre: GenreType) => (
                      <Text100>{genre}</Text100>
                    ))
                  : "Unknow genre"}
              </div>
            </FlexLeft>

            <FlexLeft pr={56}>
              <Text100 grey mb={2}>
                Director
              </Text100>
              <div>
                {info.Director
                  ? info.Director.split(",").map((director: DirectorType) => (
                      <Text100>{director}</Text100>
                    ))
                  : "Unknow director"}
              </div>
            </FlexLeft>
          </Wrapper>
        </FlexLeft>

        <FlexRight width={1 / 2}>
          {info.Poster === "N/A" ? (
            <LargeEmptyThumbnail />
          ) : (
            <LargeThumbnail src={info.Poster} alt="The movie poster" />
          )}
        </FlexRight>
      </Wrapper>
    )}
  </div>
)

export default DetailsView
