// Code CoordinatesButton Component Here
import React from 'react';
import PropTypes from 'prop-types'

export default class CoordinatesButton extends React.Component {
  static propTypes = {
    onReceiveCoordinates: PropTypes.func.isRequired,
  };

  onClickButton = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.onClickButton}>click for the coords!</button>
    );
  }

}
