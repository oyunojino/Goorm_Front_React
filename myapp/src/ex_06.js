import React, { Component } from 'react';

// 참고 사이트
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

class Map extends Component {
  componentDidMount() {
    var Map_Arr = [ 3, 2, 8, 8 ]
    let Map_newArr = Map_Arr.map(x => x)
    console.log("1. Map_newArr : ["+Map_newArr+"]")
    let Map_mulitiArr = Map_Arr.map(x => x * 2)
    console.log("2. Map_mulitiArr : ["+Map_mulitiArr+"]")
    var ObjArray = [{key:'react', value:'100'},
                    {key:'리액트', value:'OneHundred'}];
    let Map_objArr = ObjArray.map((obj, index) => {
      console.log((index+3)+". obj : "+JSON.stringify(obj))
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log("5. Map_objArr : "+JSON.stringify(Map_objArr))
  }
  render() {
    return (
      <h2>Map 예제</h2>
    )
  }
}
export default Map;