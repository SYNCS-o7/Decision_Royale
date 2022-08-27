import './App.css';
import React, { useState } from 'react';
import Compare from './components/Compare';
import EnterForm from './components/EnterForm';

function App() {
  const [options, setOptions] = useState(["Cheese", "Potato"]);
  const [mode, changeMode] = useState("add");
  const [optionPair, compare] = useState(['', '']);
  const [rankedPair, rankPair] = useState(['', '']);
  

  function addTask(newOp) {
    let copy = [...options];
    copy = [...copy, newOp];
    setOptions(copy);
  }

  const beginComparing = () => {
    compare([options[0], options[1]]);
    rankPair(['', '']);
    changeMode("compare");
  }
  
  const optionSelected = () => {
    console.log("Selected");
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

      <EnterForm addTask = {addTask} />
      <button onClick={() => {beginComparing()}}>Ready to decide</button>
    </>


  } else if (mode === "compare") {
    displayed =
    <>
      <h3>Pick your favourite</h3>
      <Compare options={[optionPair[0], optionPair[1]]} rank={rankPair} selected={optionSelected}/>
      <p>
        {rankedPair[0]}
      </p>
    </>
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

