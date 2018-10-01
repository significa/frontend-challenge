import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'

import Layout from '../Layout'
import Search from '../Search'
import Movie from '../../containers/Movie'

export default function App({ history, store, theme }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route path="/movie" component={Movie} />
              <Route component={Search} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object.isRequired
}
