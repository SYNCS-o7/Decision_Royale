import './App.css';
import React, { useState } from 'react';

import EnterForm from '../src/EnterForm';

function App() {
  const [options, setOptions] = useState(["Cheese", "Potato"]);

  function addTask(newOp) {
    let copy = [...options];
    copy = [...copy, newOp];
    setOptions(copy);
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
    </div>
  );
}

export default App;
