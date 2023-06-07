import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    );
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
        <div>
            {
                // .map() 사용 시 key={고유값}을 넣어줘야함
                
                users.map(
                    user => (<User user={user} key={user.id} />)

                    // # 만약 고유값이 없다면 index값으로 대체 가능
                    // (user, index) => (<User user={user} key={index} />)

                    // # 만약 key를 지정하지 않는다면
                    // 변경 전 : ['a', 'b']
                    // <div>a</div> <div>b</div>
                    // 변경 후 : ['a', 'e', 'b']
                    // <div>a</div> <div>e</div> <div>b</div>
                    //  -> 기존에 있던 것 또한 순서에 맞춰 수정됨(비효율적)

                    // # 만약 key를 지정한다면
                    // 변경 전 : ['a', 'b']
                    // [
                    //     {id : 0, text: 'a'},
                    //     {id : 1, text: 'b'},
                    // ]
                    // 변경 후 : ['a', 'e', 'b']
                    // [
                    //     {id : 0, text: 'a'},
                    //     {id : 2, text: 'e'},
                    //     {id : 1, text: 'b'},
                    // ]
                    //  -> 기존에 있던 건 제외하고 수정됨(효율적)
                )
            }
        </div>
    )
}
export default UserList;