import { connect } from 'react-redux'

import SearchResults from '../components/SearchResults'

const mapStateToProps = ({ searchResults }) => ({
  ids: searchResults
})

export default connect(mapStateToProps)(SearchResults)
