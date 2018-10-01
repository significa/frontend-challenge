import React from 'react'
import PropTypes from 'prop-types'

import { Svg, Text, Play, Circle } from './style'

const LOADING_DELAY = 100

export default class Logo extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = { loading: props.loading }
  }

  componentDidUpdate() {
    if (!this.props.loading) return
    // Don't show spinner for short loads
    setTimeout(() => {
      if (this.props.loading) this.setState({ loading: true })
    }, LOADING_DELAY)
  }

  onAnimationIteration = () => {
    // Stop animation at the end iteration
    if (!this.props.loading) this.setState({ loading: false })
  }

  render() {
    return (
      <Svg>
        <Text />
        <Circle
          loading={this.state.loading}
          onAnimationIteration={this.onAnimationIteration}
        />
        <Play />
      </Svg>
    )
  }
}

Logo.propTypes = {
  loading: PropTypes.bool.isRequired
}
