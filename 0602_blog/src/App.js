// warning 무시 가능
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // - JS  => document.querySelector('h4').innerHTML = post;
  // - JSX => <h4>{post}</h4>
  let [logo, setLogo] = useState('ReactBlog');

  // useState() 사용법 1
  /*let [title1, b1] = useState('남자 코트 추천');
  let [title2, b2] = useState('강남 우동 맛집');
  let [title3, b3] = useState('파이썬 독학');*/

  // useState() 사용법 2
  let [title, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);


  let [heart, plus] = useState(0);

  function heart_plus() {
    // console.log(1);
    alert(1);
  }

  return (
    // html이 아닌 JSX 언어이기 때문에 작성하자마자 브라우저에 출력됨
    // JSX는 JS 파일에서 쓰는 HTML 대용품(부가 기능)
    //  - React => React.createElement('div', null, 'Hello World')
    //  - JSX   => <div></div>

    <div className="App">
      {/* 헤더 */}
      <div className='black-nav'>
        {/* 데이터바인딩 : 변수를 삽입 시 { 변수명 } */}
        {/* <h4 id={post}>블로그임</h4> */}

        {/* Object 자료형식으로 style 지정 */}
        {/* <h4 style={ {color : 'red', fontSize : '16px'}}>블로그임</h4> */}
        <h4>{logo}</h4>
      </div>

      {/* 내용_1 */}
      <div className='list'>
        <button onClick={() => {
          let copy =[...title];
          copy.sort();
          b(copy);
        }}>가나다순 정렬</button>
        {/* onClick 핸들러는 무조건 함수가 들어가야함!!! */}
        <h4>{title[0]} <span onClick={() => { plus( heart + 1 ) }}>👍</span> {heart} </h4>
        <p>2월 17일 발행</p>
        <button onClick={() => {
          // 1번 경우
          // b(['여자코트 추천', '강남 우동맛집', '파이썬독학']);


          // 2번 경우
          // Q : let copy = title; 가 안되는 이유
          // A : [state 변경 함수 특징]
          //      - 기존state == 신규state이라면 변경 X
          //     [array/object 특징]
          //      - array/object를 담은 변수엔 내용이 아니라 주소만 저장됨
          //     [참고 자료]
          //      - reference data type 관련 설명 확인

          // ... -> 괄호를 벗겨주세요
          // []  -> 괄호를 다시 넣어주세요
          let copy = [...title];
          copy[0] = '여자코드 추천';
          b(copy);

        }}>제목 수정</button>
      </div>

      {/* 내용_2 */}
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {/* 내용_3 */}
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>
    </div>
  );
}

// 컴포넌트 이름은 대문자로 시작
function Modal() {
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;
