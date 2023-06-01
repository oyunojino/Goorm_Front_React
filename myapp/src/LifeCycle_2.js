import React, {Component} from 'react';

class LifeCycle_2 extends Component {
    // props : 예약어
    constructor(props) {
        // super() : 무조건 부모 클래스를 불러 오고 시작해야함.
        super(props);
        // 변수 선언(= var aaa;)
        this.state = {};
        console.log('1. constructor 메서드가 호출되었습니다.')
    }

    render() {
        console.log('3. constructor() 함수 호출됨');
        return(
            <h2>이것은 constructor 함수입니다.</h2>
        );
    }
}
export default LifeCycle_2;