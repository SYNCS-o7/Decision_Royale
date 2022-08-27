import './App.css';
import React, { useState, useEffect } from 'react';
import Compare from './components/Compare';
import EnterForm from './components/EnterForm';
import { setStrategy, begin, isFinished, getWinner, getChoices, makeChoice } from './comparisons/Comparisons.js';

function App() {
  
  const [options, setOptions] = useState(["Cheese", "Potato", "Sasuage", "Bacon", "Lettuce"]);
  const [mode, changeMode] = useState("add");
  const [pair, setPair] = useState(["", ""]);

  function addOption(newOp) {
    let copy = [...options];
    copy = [...copy, newOp];
    setOptions(copy);
  }

  function selectOption(op) {
    makeChoice(op);

    if (isFinished()) {
      setOptions([getWinner()]);
      changeMode("result");
      return;
    }

    let choices = getChoices();
    console.log(choices);
    setPair(choices);
  }

  let displayed = <></>;
  
  if (mode === "add") {
    displayed = 
    <div className='add-section'>
      <div className='horizontal'>

        <div className='text-input'>
          <EnterForm addTask = {addOption} />
        </div>

        <div className='options-list'>
          {options.map((option) => {
            return <div className='option'>{option}</div>;
            })}
        </div> 
      </div>

      <div className='strategy-select'>
        <button onClick={() => {
            setStrategy("KingHill");
            changeMode("compare");
            begin(options);
            setPair(getChoices());
          }}>Elimination</button>
        <button onClick={() => {
            setStrategy("Tournament");
            changeMode("compare");
            begin(options);
            setPair(getChoices());}}>
          Tournament
        </button>
      </div>
    </div>


  } else if (mode === "compare") {
    if (options.length <= 1) {
      changeMode("result");
      return;
    }


    displayed =
    <>
      <h3>Pick your favourite</h3>
      <Compare options={ pair } selectOption={ selectOption }/>
    </>

  } else if (mode === "result") {
    displayed =
    <>
      <p>
        <h3>
          Your decision is
        </h3>
        {options[0]}
      </p>
      <button onClick={() => {changeMode("add"); setOptions([])}}>
        Make another decision
      </button>
    </>
  }

  return (
    
    <div className="container">
      <div className='flex'>
          <h1 className='header'>
            DECISION ROYALE
          </h1>
        <div className='content'>
          {displayed}
        </div>
      </div>
    

    
    </div>
  );
}

export default App;

