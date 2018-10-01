import { connect } from 'react-redux'

import getQueryParam from '../utils/get-query-param'
import {
  getIsFailed,
  getIsLoading,
  getErrorMessage
} from '../state/modules/api-status'

import SearchContent from '../components/SearchContent'

const mapStateToProps = ({ router, searchResults, apiStatus }) => ({
  search: !!getQueryParam(router.location.search, 'search'),
  results: !!searchResults.length && !getIsLoading(apiStatus),
  error: getIsFailed(apiStatus),
  errorMessage: getErrorMessage(apiStatus)
})

export default connect(mapStateToProps)(SearchContent)
