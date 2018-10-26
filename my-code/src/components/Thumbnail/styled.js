// @flow
import styled from "styled-components"
import type { PropType } from "../../types.js"

const SmallEmptyThumbnail = styled.div`
  width: 180px;
  height: 240px;
  border-radius: 2px;
  background-color: ${({ theme }: PropType) => theme.color.grey.grey};
`

const SmallThumbnail = styled.div`
  width: 180px;
  height: 240px;
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
  SmallThumbnail,
  SmallEmptyThumbnail,
  LargeThumbnail,
  LargeEmptyThumbnail
}
