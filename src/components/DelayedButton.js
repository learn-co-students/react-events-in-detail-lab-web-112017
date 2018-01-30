// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
  startDelayedClick = (event) => {
    setTimeout(() => {
      event.persist()
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return(
      <button onClick={this.startDelayedClick}/>
    )
  }
}

export default DelayedButton;
