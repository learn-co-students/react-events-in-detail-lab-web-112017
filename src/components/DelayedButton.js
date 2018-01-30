// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

handleOnClickDelay = (e) => {
   e.persist();
   setTimeout( () => {
     this.props.onDelayedClick(e);
   }, this.props.delay);
   }

render () {
  return (
    <button onClick={this.handleOnClickDelay}> Delay</button>
  )
}


}


export default DelayedButton;
