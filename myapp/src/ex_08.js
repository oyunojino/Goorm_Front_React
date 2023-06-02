import React, { Component } from 'react';
class PropsDatatype extends Component {
  render() {
    let {
      BooleanTrueFalse
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {BooleanTrueFalse ? '2. ' : '1. '}
      {BooleanTrueFalse.toString()}
    </div>
    )
  }
}
export default PropsDatatype;