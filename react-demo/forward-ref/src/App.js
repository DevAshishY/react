import './App.css';
import {useRef} from 'react'
import Child from './Child';
function App() {
  const refTarget = useRef()
  // console.log(refTarget);

  return (
    <div className="App">
      <input ref={refTarget}></input>
      <Child ref = {refTarget}/>

    </div>
  );
}

export default App;
