import './App.css';
import React, { useState } from 'react';
import Compare from './components/Compare';
import EnterForm from '../src/EnterForm';

function App() {
  const [options, setOptions] = useState(["Cheese", "Potato"]);
  const [optionPair, compare] = useState(["", ""]);
  const [rankedPair, rankPair] = useState(['', '']);

  function addTask(newOp) {
    let copy = [...options];
    copy = [...copy, newOp];
    setOptions(copy);
  }
  
  const optionSelected = () => {
    console.log("Selected");
  }

  return (
    
    <div className="App">
      <div>
        <h1>
          Decision Royale
        </h1>
      </div>

      <div>
        {options.map((option) => {
          return <div>{option}</div>;
        })}
      </div> 
      <EnterForm addTask = {addTask} />
      <Compare options={[optionPair[0], optionPair[1]]} rank={rankPair} selected={optionSelected}/>
    </div>
  );
}

export default App;

