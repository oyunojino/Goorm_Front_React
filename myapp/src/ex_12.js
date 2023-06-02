import React, { Component } from 'react';
class ReactState extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: this.props.reactString,
        StateNumber: 1000,
    }
  }
  render() {
    return (
    <div style={{padding: "0px"}}>
      {this.state.StateString}{this.state.StateNumber}
    </div>
    )
  }
}
export default ReactState;