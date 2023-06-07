import React, { useState } from "react";

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        // console.log(e.target);
        // console.log(e.target.value);
        setText(e.target.value);
    }
    const onReset = (e) => {
        setText('');
    }

    return (
        <div>
            {/* value={text}를 작성하는 이유?
                수정했을 때 input에서도 변경된것을 보여주기 위해서 */}
            <input type="text" onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {text}
            </div>
        </div>
    );
}
export default InputSample;