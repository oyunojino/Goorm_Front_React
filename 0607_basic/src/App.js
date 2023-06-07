import Hello  from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample_1 from "./InputSample_1";
import InputSample_2 from "./InputSample_2";
import InputSample_3 from "./InputSample_3";

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
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
    </>
  );
}

export default App;
