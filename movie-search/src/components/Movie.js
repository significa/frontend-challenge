import React from "react"
import { Link } from "react-router-dom"
import Button from "./common/Button"

import { IMDBLabel, RottenLabel } from "./common/Label"
import { Text100, Text200, Text400 } from "./common/Typography"
import Arrow from "./common/Icons/Arrow"
import { LargeThumbnail, LargeEmptyThumbnail } from "./common/Thumbnail"

import { Wrapper, FlexLeft, FlexRight } from "./Layout"

const MovieView = prop => (
  <div>
    <Wrapper width={1180}>
      <FlexLeft width={1 / 2}>
        <Link to="/">
          <Arrow />
        </Link>

        <Wrapper mt={6} mb={4}>
          <Text200 grey>
            {prop.info.Runtime ? prop.info.Runtime : "Unknown runtime"} ·&nbsp;
          </Text200>
          <Text200 grey>
            {prop.info.Year ? prop.info.Year : "Unknown year"} ·&nbsp;
          </Text200>
          <Text200 grey>
            {prop.info.Rated ? prop.info.Rated : "No rating"}
          </Text200>
        </Wrapper>

        <Text400 mb={5}>{prop.info.Title}</Text400>
        {prop.info.Ratings ? (
          <Wrapper mb={5}>
            {prop.info.Ratings.map(ratings => (
              <div key={prop.info.Title}>
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
            {prop.active ? (
              <Button
                text="Favorited"
                onClick={prop.toggleFavorite}
                active={prop.favorite}
              />
            ) : (
              <Button
                text="Add to favorites"
                onClick={prop.removeFavorite}
                active={prop.favorite}
              />
            )}
          </Wrapper>
        ) : null}

        <FlexLeft mb={5}>
          <Text100 grey mb={2}>
            Plot
          </Text100>
          <Text100>
            {prop.info.Plot
              ? prop.info.Plot
              : "There's no prop.information available"}
          </Text100>
        </FlexLeft>

        <Wrapper mb={5}>
          <FlexLeft pr={56}>
            <Text100 grey mb={2}>
              Cast
            </Text100>
            <div>
              {prop.info.Actors
                ? prop.info.Actors.split(",").map(actor => (
                    <Text100 key={actor}>{actor}</Text100>
                  ))
                : "There's no prop.information available"}
            </div>
          </FlexLeft>

          <FlexLeft pr={56}>
            <Text100 grey mb={2}>
              Genre
            </Text100>
            <div>
              {prop.info.Genre
                ? prop.info.Genre.split(",").map(genre => (
                    <Text100 key={genre}>{genre}</Text100>
                  ))
                : "Unknow genre"}
            </div>
          </FlexLeft>

          <FlexLeft pr={56}>
            <Text100 grey mb={2}>
              Director
            </Text100>
            <div>
              {prop.info.Director
                ? prop.info.Director.split(",").map(director => (
                    <Text100 key={director}>{director}</Text100>
                  ))
                : "Unknow director"}
            </div>
          </FlexLeft>
        </Wrapper>
      </FlexLeft>

      <FlexRight width={1 / 2}>
        {prop.info.Poster === "N/A" ? (
          <LargeEmptyThumbnail />
        ) : (
          <LargeThumbnail src={prop.info.Poster} alt="The movie poster" />
        )}
      </FlexRight>
    </Wrapper>
  </div>
)
export default MovieView
