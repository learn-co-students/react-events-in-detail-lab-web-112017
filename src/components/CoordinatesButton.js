// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
   handleClick = (event) => {
    //debugger;
    //event.preventDefault();
    let coordinates = [event.screenX, event.screenY]
    console.log(coordinates)
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me!</button>
    )
  }
}

export default CoordinatesButton;
