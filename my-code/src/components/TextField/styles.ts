import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean } & {
  isLoading?: boolean
}

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon}
  `
}

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.white};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.white};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.lightGrey};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: 1.2rem 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.lightGrey};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    ${error && wrapperModifiers.error(theme)};
  `}
`
