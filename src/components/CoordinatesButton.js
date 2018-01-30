// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

  handleClick = (e) => {
    let target = [e.screenX, e.screenY]
    this.props.onReceiveCoordinates(target);

  }

  render(){
    return (
      <button onClick={this.handleClick} />
    )
  }


}

export default CoordinatesButton;
