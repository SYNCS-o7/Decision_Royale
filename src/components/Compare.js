import React from 'react'

function Compare({
    options,
    rank,
    selected
}) {

    const selectOption = (n) => {
        if (n===1) {
           rank([options[0], options[1]]);
        } else {
           rank([options[1], options[0]]);
        }

        selected();
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