import React from "react";

function User({user, onRemove}) {
    const {username, email, id} = user;
    return (
        <div>
            <b>{username}</b> <span>( {email} )</span>
            {/* <button onClick={() => onRemove(user.id)}>삭제</button> */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList_4({ users, onRemove }) {
    return (
        <div>
            {
                users.map(
                    ( user, index ) => (
                        <User
                            user = {user}
                            key = {user.id}
                            onRemove = {onRemove}
                        />
                    )
                )
            }
        </div>
    )
}
export default UserList_4;