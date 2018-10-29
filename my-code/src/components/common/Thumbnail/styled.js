// @flow
import styled from "styled-components"
import type { PropType } from "../../../types.js"

export const SmallEmptyThumbnail = styled.div`
  width: 180px;
  height: 240px;
  border-radius: 2px;
  background-color: ${({ theme }: PropType) => theme.color.grey.grey};
`

export const ThumbnailHolder = styled.a`
  position: relative;
  margin-bottom: 20px;
`

export const ThumbnailText = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  visibility: hidden;

  ${ThumbnailHolder}:hover & {
    visibility: visible;
  }
`

export const SmallThumbnail = styled.div`
  width: 180px;
  height: 240px;
  background-image: url(${({ image }: PropType) => image});
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  opacity: 1;

  ${ThumbnailHolder}:hover & {
    opacity: 0.4;
    transition: ${({ theme }: PropType) => theme.transition};
  }
`

export const LargeThumbnail = styled.img`
  width: 480px;
  height: 640px;
  border-radius: 8px;
`

export const LargeEmptyThumbnail = styled.div`
  width: 480px;
  height: 640px;
  border-radius: 8px;
  background-color: ${({ theme }: PropType) => theme.color.grey.grey};
`
