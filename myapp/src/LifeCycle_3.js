import React, {Component} from 'react';

class LifeCycle_3 extends Component {
    // static 메서드는 최초 한번만 실행됨
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps 함수 호출됨 : ' + props.prop_value);
        return {temp_state:props.prop_value};
    }
    constructor(props) {
        // super() : 무조건 부모 클래스를 불러 오고 시작해야함.
        super(props);
        // 변수 선언(= var aaa;)
        this.state = {};
        console.log('1. constructor 메서드가 호출되었습니다.');
    }

    componentDidMount() {
        console.log('4. componentDidMount 함수가 호출되었습니다.');
        console.log('5. temp_state: ' + this.state.temp_state);
    }

    render() {
        console.log('3. render() 함수 호출됨');
        return(
            <h2>이것은 componentDidMount 함수입니다.</h2>
        );
    }
}

export default LifeCycle_3;