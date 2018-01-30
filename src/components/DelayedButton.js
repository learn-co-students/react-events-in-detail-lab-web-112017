import React from 'react'

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (<button onClick={this.handleClick}>hhh</button>)
  }

  handleClick = (e) => {
    e.persist()
    debugger
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay);
    //setTimeout(this.props.onDelayedClick, delay);
  }
}

export default DelayedButton;
