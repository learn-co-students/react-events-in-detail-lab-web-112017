// Code CoordinatesButton Component Here
import React from 'react'
export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    event.persist()
    // debugger
    //console.log(event) //get X and Y
    let x = event.clientX
    let y = event.clientY
    this.props.onReceiveCoordinates([x,y])
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coords here</button>

    )
  }
}
