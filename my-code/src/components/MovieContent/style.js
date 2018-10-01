import sc from 'styled-components'
import { theme } from 'styled-tools'

import { text1, text3, text4 } from '../../styles/text'

export const Wrapper = sc.div`
  margin-top: 24px;
  display: grid;
  grid-gap: 24px 96px;
  grid-template-columns: 0.6fr 0.4fr;

  @media (max-width: 1024px) {
    grid-column-gap: 24px;
    grid-template-columns: auto minmax(30vw, 0.4fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Row = sc.div`
  grid-column: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction || 'row'};
`

export const MetaText = sc.span`
  ${text3}
  font-weight: 400;
  color: ${theme('greyLight')};
`

export const Title = sc.span`
  ${text1}
  display: block;
  max-width: 20ch;
  margin: 0 0 8px;

  @media (max-width: 1024px) {
    font-size: 56px;
  }

  @media (max-width: 800px) {
    font-size: 48px;
  }
`

export const Text = sc.span`
  ${text4}
`

export const Heading = sc.span`
  display: block;
  margin-bottom: 8px;
  ${text4}
  font-weight: 500;
  color: ${theme('greyLight')};

  margin-top: 16px;
`

export const PosterWrapper = sc.div`
  grid-column: 2;
  grid-row: 2 / 7;

  position: relative;

  @media (max-width: 1000px) {
    grid-row: 2 / 4;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export const Poster = sc.img`
  border-radius: 8px;

  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
`

export const Paragraph = sc.p`
  max-width: 54ch;
  margin: 0;
`

export const Subgrid = sc.div`
  grid-column: 1;
  display: grid;
  grid-gap: 56px;
  grid-template-columns: repeat(3, minmax(0, max-content));

  @media (max-width: 480px) {
    grid-template-columns: none;
    grid-gap: 24px;
  }
`
