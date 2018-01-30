// Code DelayedButton Component Here
import React from "react"

class DelayedButton extends React.Component {
  constructor(props){
    super(props)
  }

  delayedClick = (e) => {
    e.persist()
    let callback = () => {
      return this.props.onDelayedClick(e)
    }
    setTimeout(callback, this.props.delay)
  }

  render(){
    return(
      <div>
        <button onClick={this.delayedClick}>delayed</button>
      </div>
    )
  }
}

export default DelayedButton
