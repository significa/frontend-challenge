import React from "react"
import { Link } from "react-router-dom"
import Arrow from "./common/Icons/Arrow"
import { LargeThumbnail, LargeEmptyThumbnail } from "./common/Thumbnail"

import Kicker from "./movie/Kicker"
import Information from "./movie/Information"
import TitleMenu from "./movie/TitleMenu"

import { Wrapper, FlexLeft, FlexRight } from "./Layout"

const MovieView = prop => (
  <div>
    <Wrapper width={"100%"}>
      <FlexLeft width={"50%"}>
        <Link to="/">
          <Arrow />
        </Link>
        <Kicker prop={prop}/>
        <TitleMenu prop={prop} />
        <Information prop={prop} />
      </FlexLeft>
      
      <FlexRight width={"50%"}>
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
