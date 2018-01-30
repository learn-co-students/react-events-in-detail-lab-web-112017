import React from 'react';

class CoordinatesButton extends React.Component {
  handleClickEvent = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClickEvent}>Get Coords</button>
    )
  }
}

export default CoordinatesButton;
