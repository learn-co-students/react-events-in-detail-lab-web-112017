// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
  handleDelay = (event) => {
    //debugger;
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleDelay}>Delay Click!</button>
    )
  }

}

export default DelayedButton;
