import Hello  from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";

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

      <Counter />
    </>
  );
}

export default App;
