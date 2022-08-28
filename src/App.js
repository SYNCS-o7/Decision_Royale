import './App.css';
import React, { useState } from 'react';
import Compare from './components/Compare';
import EnterForm from './components/EnterForm';
import { setStrategy, begin, isFinished, getWinner, getChoices, makeChoice } from './comparisons/Comparisons.js';

import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');

function App() {
  
  const [options, setOptions] = useState([]);
  const [mode, changeMode] = useState("add");
  const [pair, setPair] = useState(["", ""]);
  
  function changeModeWrapper(newMode) {
    if (mode === "add" 
    && newMode === "compare" 
    && options.length < 2) {
      // notify();
      toast.error("Enter 2 or more options :).")
      return;
    }

    changeMode(newMode);
  }

  function addOption(newOp) {
    let copy = [...options];
    copy = [...copy, newOp];
    setOptions(copy);
  }

  function selectOption(op) {
    makeChoice(op);

    if (isFinished()) {
      setOptions([getWinner()]);
      changeModeWrapper("result");
      return;
    }

    let choices = getChoices();
    console.log(choices);
    setPair(choices);
  }

  let displayed = <></>;
  let info = <></>;
  
  if (mode === "add") {
    info = 
    <>
      Stuck making a decision? 
      Just enter all the options and click elimination or tournament. 
    </>
    displayed = 
    <div className='add-section'>
      <div className='horizontal'>

        <div className='buttons-section'>
          <EnterForm addTask = {addOption} />

          <div className='strategy-select'>
            <button onClick={() => {
                setStrategy("KingHill");
                changeModeWrapper("compare");
                begin(options);
                setPair(getChoices());
              }}>Elimination</button>
            <button onClick={() => {
                setStrategy("Tournament");
                changeModeWrapper("compare");
                begin(options);
                setPair(getChoices());}}>
              Tournament
            </button>
          </div>
        </div>

        <div className='options-list'>
          {options.map((option) => {
            return <div className='option'>{option}</div>;
            })}
        </div> 
      </div>

    </div>


  } else if (mode === "compare") {
    if (options.length <= 1) {
      changeModeWrapper("result");
      return;
    }
    
    info =<>Pick your preference!</>;

    displayed =
    <>
      <div className='space' />
      <h1 class="light_text">Choose your preference.</h1>
      <Compare options={ pair } selectOption={ selectOption }/>
    </>

  } else if (mode === "result") {

    info =<>🎉 You just made the best decision 🎉</>;

    displayed =
    <div className='coloumn'>
      <div className='highlighted_box'>
        {options[0]}
      </div>
      <p className='text'>
        #1 Victory Royale
      </p>
      <button className='back' onClick={() => {changeModeWrapper("add"); setOptions([])}}>
        Make another decision
      </button>
    </div>
  }

  return (
    <>
      <Toaster />
      <div className="container">
        

        <div className='flex'>
            <h1 className='header'>
              DECISION <wbr/> ROYALE
            </h1>
          <div className='content'>
            {displayed}
          </div>
          <div className='info text'>
            {info}
          </div>
        </div>
      </div>
    </>    
  );
}

export default App;

