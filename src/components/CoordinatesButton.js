// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  render() {
    return (
      <button onClick={ this.handleCoordinates }></button>
    )
  }

  handleCoordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
}

export default CoordinatesButton
