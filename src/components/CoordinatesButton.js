// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  createCoordinates = (e) => this.props.onReceiveCoordinates([e.screenX, e.screenY])
    // e.preventDefault()
    // // console.log(e)
    // // let eventData = e.target
    // let coords = [e.screenX, e.screenY]
    // console.log(coords)

  render() {
    return (
      <div>
        <button onClick={this.createCoordinates}>Coordinator</button>
      </div>
    )
  }
}

export default CoordinatesButton;
