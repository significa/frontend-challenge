import { connect } from 'react-redux'
import { replace } from 'connected-react-router'

import getQueryParam from '../utils/get-query-param'

import SearchBar from '../components/SearchBar'

const mapStateToProps = ({ router }) => ({
  value: getQueryParam(router.location.search, 'search')
})

const mapDispatchToProps = {
  onChange: value => replace(`/?search=${value}`)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
