import React from "react";

// onChange => input 함수가 변화할 때 호출
// onCreate => 버튼을 눌렀을 때 새로운 항목을 등록
function CreateUser({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}
export default CreateUser;