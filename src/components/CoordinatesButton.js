import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
    this.clicker = this.clicker.bind(this)
  }

  clicker = (e) => {
    e.persist();
    let arr = [e.pageX, e.pageY];

    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (<button onClick={this.clicker}></button>)
  }
}

export default CoordinatesButton;
