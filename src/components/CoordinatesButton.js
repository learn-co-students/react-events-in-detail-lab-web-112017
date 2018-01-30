// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick = (e) => {
    let target = [e.screenX, e.screenY]
    this.props.onReceiveCoordinates(target)
  }
  
  render(){
    console.log(this.state)
    return (
      <button onClick={this.handleClick}>CoordinatesButton </button>
    )
  }
}

export default CoordinatesButton
