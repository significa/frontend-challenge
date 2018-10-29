// @flow
import styled from "styled-components"
import type { PropType } from "../../types.js"

const SmallEmptyThumbnail = styled.div`
  width: 180px;
  height: 240px;
  border-radius: 2px;
  background-color: ${({ theme }: PropType) => theme.color.grey.grey};
`

const ThumbnailHolder = styled.a`
  position: relative;
  margin-bottom: 20px;
`

const ThumbnailText = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
`

const SmallThumbnail = styled.div`
  width: 180px;
  height: 240px;
  background-image: url(${({ image }: PropType) => image});
  border-radius: 2px;
`

const LargeThumbnail = styled.img`
  width: 480px;
  height: 640px;
  border-radius: 8px;
`

const LargeEmptyThumbnail = styled.div`
  width: 480px;
  height: 640px;
  border-radius: 8px;
  background-color: ${({ theme }: PropType) => theme.color.grey.grey};
`

export {
  ThumbnailHolder,
  ThumbnailText,
  SmallThumbnail,
  SmallEmptyThumbnail,
  LargeThumbnail,
  LargeEmptyThumbnail
}
