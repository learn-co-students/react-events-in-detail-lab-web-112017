// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
  render() {
    return (
      <button onClick={ this.handleCoordinates }></button>
    )
  }

  handleCoordinates = (e) => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

}

export default DelayedButton
