import { useState } from 'react';
import './App.css';
import Key from './key';

function App() {

let [input,setInput] = useState("");
function handleClick(value){
  setInput(input+value)
 
}
function calculate(value){
  let outputVal = eval(input)
  setInput(outputVal);
}
function handleClear(value){
  setInput("");

}
  return (
    <div className='container'>
  <h1 style={{backgroundColor:"#c7790f",color:"white", width: "345px", textAlign: "center",
}}>CALCULATOR</h1>
      <div className='calculator'>
        <input type='text' value={input} className='output'/>

        <Key handleClick={handleClick} handleClear={handleClear} calculate={calculate}>  </Key>
      </div>
    </div>
  );
}

export default App;
