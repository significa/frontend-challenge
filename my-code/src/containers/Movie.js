import { connect } from 'react-redux'

import { getIsLoaded } from '../state/modules/movies'
import { getIsFailed, getErrorMessage } from '../state/modules/api-status'
import getQueryParam from '../utils/get-query-param'

import Movie from '../components/Movie'

const mapStateToProps = ({ router, movies, apiStatus }) => ({
  loaded: getIsLoaded(movies, getQueryParam(router.location.search, 'id')),
  error: getIsFailed(apiStatus),
  errorMessage: getErrorMessage(apiStatus)
})

export default connect(mapStateToProps)(Movie)
