import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.lightGrey};
      text-decoration: none;

      > svg {
        display: block;
        width: 3rem;
      }

      &:hover {
        color: ${theme.colors.white};
      }
    }
  `}
`
export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 0 ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      padding: 0;
      flex-direction: row;
    `}
  `}
`

export const MovieContent = styled.div`
  ${({ theme }) => css`
    max-width: 58rem;
    width: 100%;
    margin-top: ${theme.spacings.medium};
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGrey};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const RunTime = styled.span``

export const RatedTag = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.lightGrey};
    padding: 0.1rem 0.3rem;
    border-radius: ${theme.border.radius};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.bold};
    `}
  `}
`

export const RatedContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.medium};
    `}
  `}
`
export const ImdbTag = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-right: ${theme.spacings.xsmall};
  `}
`

export const ImdbTagIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.yellow};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
  `}
`
export const Score = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.lightGrey};
    border-right: 1px solid ${theme.colors.lightGrey};
    border-bottom: 1px solid ${theme.colors.lightGrey};
    border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
    padding: ${theme.spacings.xxsmall};
  `}
`
export const RottenTag = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-right: ${theme.spacings.xsmall};
  `}
`
export const RottenTagIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.red};
    border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
  `}
`

export const Storyline = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.xlarge};
    `}
  `}
`
export const SmallTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.lightGrey};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xxsmall};
    display: block;
  `}
`
export const StorylineText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    line-height: ${theme.spacings.small};
    font-weight: ${theme.font.bold};
  `}
`
export const MoreAbout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.medium};
    `}
  `}
`
export const ListContent = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xxsmall});
  `}
`
export const List = styled.ul`
  ${({ theme }) => css`
    > li {
      color: ${theme.colors.white};
      list-style: none;
      margin-bottom: ${theme.spacings.xxsmall};

      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`

/* export const ListItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    list-style: none;
    margin-bottom: ${theme.spacings.xxlarge});

    &:last-child {
      margin-bottom: 0px;
    }
  `}
`
 */
