import React from 'react'

function Compare({
    options,
    selectOption
}) {

    const select = (n) => {
        selectOption(options[n]);
    };

    const randomChoice = () => {
        let choice = Math.round(Math.random());
        select(choice);
    }

    return(
        <div>
            Pick your option
            <br></br>
            <button onClick={() => {select(0)}}>
                {options[0]}
            </button>
            <button onClick={() => {select(1)}}>
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