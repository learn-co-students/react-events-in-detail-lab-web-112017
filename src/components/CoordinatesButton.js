// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component {
  constructor(props){
    super(props)
  }

  createCoordinates = (e) => {
    let coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render(){
    return(
      <div>
        <button onClick={this.createCoordinates}>coordinates</button>
      </div>
    )
  }
}

export default CoordinatesButton
