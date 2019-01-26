import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import App from './App'
import { register } from './serviceWorker'

const Wrapper = () => (
	<ThemeProvider theme={theme}>
		<App/>
	</ThemeProvider>
)

ReactDOM.render(<Wrapper />, document.getElementById('root'))

register()
