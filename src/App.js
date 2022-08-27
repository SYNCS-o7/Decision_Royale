import './App.css';
import React, { useState } from 'react';
import Compare from './components/Compare';
import EnterForm from './components/EnterForm';

function App() {
  const [options, setOptions] = useState(["Cheese", "Potato", "Sasuage", "Bacon", "Lettuce"]);
  const [mode, changeMode] = useState("add");

  // const [optionPair, compare] = useState(['', '']);
  // const [rankedPair, rankPair] = useState(['', '']);
  

  function addOption(newOp) {
    let copy = [...options];
    copy = [...copy, newOp];
    setOptions(copy);
  }

  function removeOption(op) {
    let copy = [];
    for (let i = 0; i < options.length; i++) {
      if(options[i] !== op) {
        copy.push(options[i]);
      }

    }
    setOptions(copy);

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
      <button onClick={() => {changeMode("compare")}}>Ready to decide</button>
    </>


  } else if (mode === "compare") {
    if (options.length <= 1) {
      changeMode("result");
      return;
    }

    displayed =
    <>
      <div>
        {options.map((option) => {
          return <div>{option}</div>;
          })}
      </div> 
      <h3>Pick your favourite</h3>
      <Compare options={ options } removeOption={ removeOption }/>
    </>

  } else if (mode === "result") {
    displayed = 
    <p>
      <h3>
        Your decision is
      </h3>
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

