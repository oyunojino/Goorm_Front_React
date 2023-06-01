import React, {Component} from "react";

class LifeCycle_1 extends Component {
    render() {
        console.log('3. render() 함수 호출됨');
        return(
            <h2>이것은 render 함수입니다.</h2>
        );
    }
}
export default LifeCycle_1;