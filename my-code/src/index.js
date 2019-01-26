import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import theme from './theme'
import App from './App'
import { register } from './serviceWorker'

const Wrapper = () => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<GlobalStyle/>
			<App/>
		</Fragment>
	</ThemeProvider>
)

ReactDOM.render(<Wrapper />, document.getElementById('root'))

register()
