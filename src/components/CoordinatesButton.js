// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {


handleOnClick = (e) => {
  this.props.onReceiveCoordinates([e.screenX, e.screenY])
}

render () {
  return (
    <div>
      <button onClick= {this.handleOnClick} >Click Me</button>
    </div>
  )
}


}

export default CoordinatesButton;
