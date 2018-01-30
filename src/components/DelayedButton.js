import React from 'react';

class DelayedButton extends React.Component {
  handleClickEvent = (e) => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClickEvent}>Delay</button>
    )
  }
}

export default DelayedButton;
