// Code CoordinatesButton Component Here
import React from 'react'


class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return <button onClick={ this.onCoordinatesButtonClick }>Coordinates Button</button>
  }

  onCoordinatesButtonClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

}

export default CoordinatesButton
