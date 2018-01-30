// Code DelayedButton Component Here
import React from 'react'


class DelayedButton extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return <button onClick={ this.onDelayedButtonClick }>Delayed Button</button>
  }

  onDelayedButtonClick = (e) => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

}

export default DelayedButton
