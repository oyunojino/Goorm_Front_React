import React from "react";

function User(props) {
    <div>
        <b>{props.username}</b> <span>{props.email}</span>
    </div>
}

function UserList() {
    const users = [
        {
            id : 1,
            username : 'velopert_1',
            email  : 'public.velopert.1@gmail.com'
        },
        {
            id : 2,
            username : 'velopert_2',
            email  : 'public.velopert.2@gmail.com'
        },
        {
            id : 3,
            username : 'velopert_3',
            email  : 'public.velopert.3@gmail.com'
        }
    ];

    return (
        <>
            {/* 방법 1 -> 그냥 작성
            <div>
                <b>{users[0].username}</b> <span>{users[0].email}</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>{users[1].email}</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>{users[2].email}</span>
            </div> */}

            {/* // 방법 2 -> 컴포넌트 사용 */}
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </>
    )
}
export default UserList;