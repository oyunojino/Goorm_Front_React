import React, { Component } from 'react';
class Variable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var varName = 'react'
    console.log('varName1 : '+varName)
    var varName = '100' // 'varName' is already defined  no-redeclare, Warning! not error.
    console.log('varName2 : '+varName)
    let letName = 'react'
    console.log('letName1 : '+letName)
    // let letName = '100' // Parsing error: Identifier 'letName' has already been declared
    letName = 'react100'
    console.log('letName2 : '+letName)
    const constName = 'react'
    console.log('constName : ' + constName)
    // const constName = '100' // Parsing error: Identifier 'constName' has already been declared
    // constName = 'react100' // Uncaught TypeError: Assignment to constant variable.
  }
  render() {
    return (
      <h2>Variable 예제</h2>
    )
  }
}
export default Variable;