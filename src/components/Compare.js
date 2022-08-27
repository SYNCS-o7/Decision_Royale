import React from 'react'

function Compare({
    options,
    removeOption,
    addOption
}) {

    const selectOption = (n) => {
        
        if (n===0) {
            removeOption(options[1]);
        } else {
            removeOption(options[0]);
        }
    };

    const randomChoice = () => {
        let choice = Math.round(Math.random());
        selectOption(choice);
    }

    return(
        <div>
            Pick your option
            <br></br>
            <button onClick={() => {selectOption(0)}}>
                {options[0]}
            </button>
            <button onClick={() => {selectOption(1)}}>
                {options[1]}
            </button>
            <br></br>
            <button onClick={() => {randomChoice()}}>
                Can't decide
            </button>
        </div>
    );
    
}

export default Compare;