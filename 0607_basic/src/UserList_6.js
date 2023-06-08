import React, {useEffect} from "react";

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;

    // 빈 배열인 경우 ->
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     // # 컴포넌트가 화면에 나타날 때 사용하는 기능
    //     // 1. props 값을 컴포넌트의 state로 나타냄
    //     // 2. REST API 요청 시 작업 처리
    //     // 3. 라이브러리(D3, Video.js) 인스턴스를 사용할 때
    //     // 4. setInterval, setTimeout을 사용할 때

    //     return () => {
    //         console.log('컴포넌트가 화면에서 사라짐');
    //         // # 컴포넌트가 화면에 사라질 때 사용하는 기능
    //         // 1. clearInterval, clearTimeout
    //         // 2. 라이브러리(D3, Video.js) 인스턴스를 제거할 때
    //     }
    // }, []);



    // 요소가 있는 배열인 경우 ->
    // [user] 배열이 설정되거나 바뀔 때마다 호출
    useEffect(() => {
        console.log('user 값이 변경 후');
        console.log(user);

        return () => {
            console.log('user 값 변경 전');
            console.log(user);
        }
    }, [user]);


    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>( {email} )</span>
            {/* <button onClick={() => onRemove(user.id)}>삭제</button> */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList_6({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                // 배열 안에 원소 업데이트 시 .map() 사용
                users.map(
                    (user) => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    )
}
export default UserList_6;