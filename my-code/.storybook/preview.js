import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'

import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'w-dark',
    values: [
      {
        name: 'w-light',
        value: theme.colors.white
      },
      {
        name: 'w-dark',
        value: theme.colors.dark
      }
    ]
  }
}

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg />
        <Story />
      </ThemeProvider>
    </>
  )
]
