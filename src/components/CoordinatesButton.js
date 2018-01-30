// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let xCoord = event.clientX;
    let yCoord = event.clientY;
    this.props.onReceiveCoordinates([xCoord, yCoord]);
  }

  render () {
    return (
      <button onClick={this.handleClick}>Coordinates!</button>
    )
  };
}

export default CoordinatesButton;
