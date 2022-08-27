import './App.css';
import React, { useState } from 'react';
import data from './examples/data.json';
import Compare from './components/Compare';

function App() {
  
  const [ optionList, setOptionList ] = useState(data);
  const [optionPair, compare] = useState(["", ""]);
  const [rankedPair, rankPair] = useState(['', '']);

  const optionSelected = () => {
    console.log("Selected");
  }

  return (
    <div className="App">
      <Compare options={[optionPair[0], optionPair[1]]} rank={rankPair} selected={optionSelected}/>
    </div>
  );
}

export default App;

