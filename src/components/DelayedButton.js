// Code DelayedButton Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class DelayedButton extends React.Component {
  static propTypes = {
    onDelayedClick: PropTypes.func,
    delay: PropTypes.number
  }

  onCd = (event) => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.onCd}>click for delay!</button>
    )
  }
}
