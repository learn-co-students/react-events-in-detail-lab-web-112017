// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  getCoordinates = (event) => {
    let coordinates = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <button onClick={this.getCoordinates}/>
    )
  }
}

export default CoordinatesButton;
