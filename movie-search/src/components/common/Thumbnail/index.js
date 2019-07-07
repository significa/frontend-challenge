// @flow
import React from "react"
import { Text100, Text200 } from "../Typography/index"
import {
  ThumbnailHolder,
  SmallThumbnail,
  SmallEmptyThumbnail,
  LargeThumbnail,
  LargeEmptyThumbnail,
  ThumbnailText
} from "./styled"
import type { ThumbnailPropType } from "../../../types.js"

const Thumbnail = ({ href, poster, title, year }: ThumbnailPropType) => (
  <ThumbnailHolder href={href}>
    {poster === "N/A" ? (
      <SmallEmptyThumbnail />
    ) : (
      <SmallThumbnail image={poster} />
    )}
    <ThumbnailText>
      <Text200>{title}</Text200>
      <Text100>{year}</Text100>
    </ThumbnailText>
  </ThumbnailHolder>
)

export { LargeThumbnail, LargeEmptyThumbnail, Thumbnail }
