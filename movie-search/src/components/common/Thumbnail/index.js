import React from "react"
import PropTypes from "prop-types"

import { SmallerText, SmallText } from "../Typography/index"
import {
  ThumbnailHolder,
  SmallThumbnail,
  SmallEmptyThumbnail,
  LargeThumbnail,
  LargeEmptyThumbnail,
  ThumbnailText
} from "./styled"

const Thumbnail = ({ href, poster, title, year }) => (
  <ThumbnailHolder href={href}>
    {poster === "N/A" ? (
      <SmallEmptyThumbnail />
    ) : (
      <SmallThumbnail image={poster} />
    )}
    <ThumbnailText>
      <SmallText>{title}</SmallText>
      <SmallerText>{year}</SmallerText>
    </ThumbnailText>
  </ThumbnailHolder>
)

Thumbnail.propTypes = {
  href: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

export { LargeThumbnail, LargeEmptyThumbnail, Thumbnail }
