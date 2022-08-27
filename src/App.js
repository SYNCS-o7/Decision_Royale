import './App.css';
import React, { useState } from 'react';
import Compare from './components/Compare';
import EnterForm from './components/EnterForm';

function App() {
  const [options, setOptions] = useState(["Cheese", "Potato", "Sasuage", "Bacon", "Lettuce"]);
  const [mode, changeMode] = useState("add");

  const [optionPair, compare] = useState(['', '']);
  const [rankedPair, rankPair] = useState(['', '']);
  

  function addOption(newOp) {
    let copy = [...options];
    copy = [...copy, newOp];
    setOptions(copy);
  }

  function removeOption(Op) {
    let copy = [];
    for (let i = 0; i < options.length; i++) {
      if(options[i] !== rankedPair[1]) {
        copy.push(options[i]);
      }

    }
    setOptions(copy);
  }

  const beginComparing = () => {

    if (options.length <= 1) {
      changeMode("result");
      return;
    }
    compare([options[0], options[1]]);
  }
  
  const optionSelected = () => {
    console.log("Selected " , rankedPair[0]);
    removeOption(rankedPair[1]);
    beginComparing();
  }

  let displayed = <></>;
  if (mode === "add") {
    displayed = 
    <>
      <div>
        {options.map((option) => {
          return <div>{option}</div>;
          })}
      </div> 

      <EnterForm addTask = {addOption} />
      <button onClick={() => {changeMode("compare"); beginComparing()}}>Ready to decide</button>
    </>


  } else if (mode === "compare") {
    displayed =
    <>
      <div>
        {options.map((option) => {
          return <div>{option}</div>;
          })}
      </div> 
      <h3>Pick your favourite</h3>
      <Compare options={[optionPair[0], optionPair[1]]} rank={rankPair} selected={optionSelected}/>
    </>

  } else if (mode==="result") {
    <p>
      <h1>
        Your decision is
      </h1>
      {options[0]}
    </p>
  }

  return (
    
    <div className="App">
      <div>
        <h1>
          Decision Royale
        </h1>
      </div>

      {displayed}
    
    </div>
  );
}

export default App;

