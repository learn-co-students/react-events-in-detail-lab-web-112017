// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  constructor(props){
    super(props);
  }

  handleDelayClick = (e) => {
    e.persist()
    setTimeout(() => {
     this.props.onDelayedClick(e);
   }, this.props.delay);
 }

  render(){
    return(
      <button onClick = {this.handleDelayClick}>DelayedClick </button>
    )
  }
}

export default DelayedButton
