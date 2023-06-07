import React, { useState } from "react";

function Counter() {
    const style = {
        width : '100px',
        height : '100px',
        border : '2px solid black',
        padding : 16,
        margin : '50px 50px',
    };

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // setNumber(number + 1);
        // 최적화 된 형태
        setNumber(n => n + 1);
    }
    const onDecrease = () => {
        // setNumber(number - 1);
        // 최적화 된 형태
        setNumber(n => n - 1);
    }

    return (
        <div style={style}>
            <h1>{number}</h1>
            {/* onClick={함수} : 함수를 넣어주는 건 가능하지만 호출은 안됨 */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;