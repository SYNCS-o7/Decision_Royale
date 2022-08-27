import React from 'react'

function Compare({
    options,
    removeOption
}) {

    const selectOption = (n) => {
        if (n===1) {
            removeOption(options[1]);
        } else {
            removeOption(options[0]);
        }
    };

    return(
        <div>
            Pick your option<br/>
            <button onClick={() => {selectOption(1)}}>
                {options[0]}
            </button>
            <button onClick={() => {selectOption(2)}}>
                {options[1]}
            </button>
        </div>
    );
    
}

export default Compare;