import React, { useState } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : '',
    });

    const {name, nickname} = inputs;

    const onChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);

        // 01. e.target에서 값을 추출
        const {name, value} = e.target;

        // 02. 아래 방법 중 하나를 선택하여 추출된 값을 변경
        // 방법 1
        // const nextInputs = {
        //     // ... ( spread 문법 )
        //     //     => 아래 값이 복사됨
        //     //          const [inputs, setInputs] = useState({
        //     //              name : '',
        //     //              nickname : '',
        //     //          });
        //     ...inputs,
        //     [name] : value,
        // }
        // setInputs(nextInputs);

        // 방법 2
        setInputs({
            // 객체 상태로 업데이트하기 위해서
            // -> 복사 후 수정 진행( 불변성을 지키기 위해 복사한 후 덮어쓰기 )
            ...inputs,
            [name] : value,
        });
    }
    const onReset = (e) => {
        setInputs({
            name : '',
            nickname : '',
        });
    }

    return (
        <div>
            {/* 03. 추출된 각각의 값은 입력해줌 */}
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
            />
            <br />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({nickname})
            </div>
        </div>
    );
}
export default InputSample;