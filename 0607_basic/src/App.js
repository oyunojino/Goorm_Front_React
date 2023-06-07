import React, {useRef, useState} from "react";
import Hello  from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample_1 from "./InputSample_1";
import InputSample_2 from "./InputSample_2";
import InputSample_3 from "./InputSample_3";
import UserList_1 from "./UserList_1";
import UserList_2 from "./UserList_2";
import UserList_3 from "./UserList_3";
import CreateUser from "./CreateUser";


function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  };

  // UserList_3.js
  // const users = [
  //     {
  //         id : 1,
  //         username : 'velopert_1',
  //         email  : 'public.velopert.1@gmail.com'
  //     },
  //     {
  //         id : 2,
  //         username : 'velopert_2',
  //         email  : 'public.velopert.2@gmail.com'
  //     },
  //     {
  //         id : 3,
  //         username : 'velopert_3',
  //         email  : 'public.velopert.3@gmail.com'
  //     }
  // ];


  // CreateUser.js
  const [users, setUsers] = useState([
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
]);

  // CreateUser.js
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  // # useRef()를 사용한 이유는?
  //  값이 바뀐다고 해서 컴포넌트가 리랜더링(새로고침) 하지 않아도 되기 때문
  const nextId = useRef(4);

  const onCreate = () => {
    // UseList_3.js

    // # useRef(4) 값을 조회
    // console.log(nextId.current);  // 4
    // nextId.current += 1;



    // CreateUser.js
    const user = {
      id : nextId.current,
      username,
      email,
      // ...inputs 이렇게 작성해도 됨
    };
    
    setUsers([...users, user]);

    setInputs({
      username : '',
      email : ''
    });
    nextId.current += 1;
  };


  return (
    <>
      {/* props 관련 실습
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="pink"/>
      </Wrapper> */}



      {/* useState 관련 실습
      <Counter /> */}



      {/* input 상태 관리_ 1개 일 경우
      <InputSample_1 /> */}
      {/* input 상태 관리_ 여러개 일 경우
      <InputSample_2 /> */}
      {/* input 상태 관리_ useRef -> 실행 후focus 이동
      <InputSample_3 /> */}


      
      {/* 배열 랜더링_ 변화 X
      <UserList_1 /> */}
      {/* 배열 랜더링_ 변화 O
      <UserList_2 /> */}
      {/* 배열 랜더링_ useRef()
      <UserList_3 users={users} /> */}



      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList_3 users={users} />
    </>
  );
}

export default App;
