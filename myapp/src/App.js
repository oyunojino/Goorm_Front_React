import logo from './logo.svg';
import './App.css';
import ImportComponent from './ImportComponent';
import LifeCycle_1 from './LifeCycle_1';
import LifeCycle_2 from './LifeCycle_2';
import LifeCycle_3 from './LifeCycle_3';
import LifeCycle_4 from './LifeCycle_4';

// App() -> 함수형태로 만들어진 컴포넌트(구성요소)
function App() {
  return (
    <div>
      <h1>Start React</h1>
      <p>HTML 적용</p>
      <ImportComponent></ImportComponent>
      <LifeCycle_1></LifeCycle_1> 
      <LifeCycle_2></LifeCycle_2>
      <LifeCycle_3 prop_value = "FromApps"/>
      <LifeCycle_4 prop_value = "FromApps"/>
      <PropsDatatype
        String="react"
        Number={100}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", onehundred:"100"}}
        Function={console.log("FunctionProps: function!")}
      />
   </div>
  );
}

export default App;
