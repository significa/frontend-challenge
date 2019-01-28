import React from 'react'
import { hydrate, render } from 'react-dom'
import 'typeface-roboto'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'components/GlobalStyle'
import * as theme from './theme'
import App from './App'
import { register } from 'serviceWorker'
import { Provider as FavoritesProvider } from 'utils/favorites'

const Wrapper = () => (
	<ThemeProvider theme={theme}>
		<FavoritesProvider>
			<App/>
			<GlobalStyle/>
		</FavoritesProvider>
	</ThemeProvider>
)

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
	hydrate(<Wrapper/>, rootElement)
} else {
	render(<Wrapper/>, rootElement)
}

register()
