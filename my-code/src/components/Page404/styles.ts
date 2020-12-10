import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxlarge};
  `}
`
export const Description = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.lightGrey};
    padding: ${theme.spacings.large};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
