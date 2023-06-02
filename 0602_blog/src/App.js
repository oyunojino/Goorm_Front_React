import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  // - JS  => document.querySelector('h4').innerHTML = post;
  // - JSX => <h4>{post}</h4>

  return (
    // html이 아닌 JSX 언어이기 때문에 작성하자마자 브라우저에 출력됨
    // JSX는 JS 파일에서 쓰는 HTML 대용품(부가 기능)
    //  - React => React.createElement('div', null, 'Hello World')
    //  - JSX   => <div></div>

    <div className="App">
      <div className='black-nav'>
        {/* 데이터바인딩 : 변수를 삽입 시 { 변수명 } */}
        {/* <h4 id={post}>블로그임</h4> */}

        {/* Object 자료형으로 style 지정 */}
        <h4 style={ {color : 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
