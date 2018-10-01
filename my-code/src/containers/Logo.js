import { connect } from 'react-redux'

import Logo from '../components/Logo'

import { getIsLoading } from '../state/modules/api-status'

const mapStateToProps = ({ apiStatus }) => ({
  loading: getIsLoading(apiStatus)
})

export default connect(mapStateToProps)(Logo)
