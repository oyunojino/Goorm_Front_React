import React, {useEffect} from "react";

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
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

function UserList_7({ users, onRemove, onToggle }) {
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
export default UserList_7;