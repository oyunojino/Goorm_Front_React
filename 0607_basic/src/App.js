import React, { useRef, useState, useMemo } from "react";
import Hello from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample_1 from "./InputSample_1";
import InputSample_2 from "./InputSample_2";
import InputSample_3 from "./InputSample_3";
import UserList_1 from "./UserList_1";
import UserList_2 from "./UserList_2";
import UserList_3 from "./UserList_3";
import UserList_4 from "./UserList_4";
import UserList_5 from "./UserList_5";
import UserList_6 from "./UserList_6";
import UserList_7 from "./UserList_7";
import CreateUser from "./CreateUser";

function conuntActiveUsers(users) {
  console.log('활성화 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
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
      id: 1,
      username: 'velopert_1',
      email: 'public.velopert.1@gmail.com',
      active : true,
    },
    {
      id: 2,
      username: 'velopert_2',
      email: 'public.velopert.2@gmail.com',
      active : false,
    },
    {
      id: 3,
      username: 'velopert_3',
      email: 'public.velopert.3@gmail.com',
      active : false,
    }
  ]);

  // CreateUser.js
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
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

    // // 배열 항목 변경 방법1 -> 스프레드 연산자로 복사 후 값을 덮어쓰기
    // // setUsers([...users, user]);
    // // 배열 항목 변경 방법2 -> .concat()함수 사용
    setUsers(users.concat(user));

    // // users.push(user); 방법은 업데이트가 되지 않음

    // setInputs({
    //   username : '',
    //   email : ''
    // });
    // nextId.current += 1;
  };

  // UseList_4.js
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active : !user.active} : user
    ));
  };

  // UseList_7.js
  // 첫 번째 요소는 무조건 함수여야하기 때문에 익명함수 사용
  // [배열]이 변경 되어야 업데이트 됨
  const count = useMemo(() => conuntActiveUsers(users), [users]);

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



      {/* 배열 항목 추가
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList_3 users={users} /> */}
      {/* 배열 항목 삭제
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList_4 users={users} onRemove={onRemove} /> */}
      {/* 배열 항목 부분 수정_1
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList_5 users={users} onRemove={onRemove} /> */}
      {/* 배열 항목 부분 수정_2
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList_5 users={users} onRemove={onRemove} onToggle={onToggle} /> */}



      {/* Hook함수_useEffect(() => {코드}, [배열]);
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList_6 users={users} onRemove={onRemove} onToggle={onToggle} /> */}
      
      {/* Hook함수_useMemo */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList_7 users={users} onRemove={onRemove} onToggle={onToggle} />
      {/* 리랜더링 될 때마다 "활성 사용자 수"를 카운트 함 */}
      <div>활성 사용자 수: {count}</div>

    </>
  );
}

export default App;
