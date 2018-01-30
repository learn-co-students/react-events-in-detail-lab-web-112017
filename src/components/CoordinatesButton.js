import React from 'react'

export default class CoordinatesButton extends React.Component {
  // constructor(props) {
  //   super()
  // }

  handleClick = (e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])

  render() {
    return(
      <button onClick={this.handleClick}> </button>

    )
  }
}
