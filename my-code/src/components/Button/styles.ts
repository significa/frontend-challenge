import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'favourite'>

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  favourited: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};

    svg {
      color: ${theme.colors.white};
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  addFavourite: (theme: DefaultTheme) => css`
    color: ${theme.colors.lightGrey};
    background: none;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: ${theme.border.radius};

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, favourite }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};

    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!favourite && wrapperModifiers.addFavourite(theme)};
    ${!!favourite && wrapperModifiers.favourited(theme)};
  `}
`
