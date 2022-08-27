import React, { useState, useEffect } from 'react'

function Compare({
    options,
    selectOption
}) {
    const TIMEOUT = 3000;
    const [time, setTime] = useState(new Date().getTime());
    const [diff, setDiff] = useState(0);

    useEffect(() => {
        var updateTime = setInterval(() => {
            let now = new Date().getTime();
            setDiff(now - time);
            if (diff > TIMEOUT) {
              setTime(now);
            }
        });
        return () => {
          clearInterval(updateTime);
        }
      }, [time]);

    const randomChoice = () => {
        let choice = Math.round(Math.random());
        select(choice);
    }

    const select = (n) => {
        let now = new Date().getTime();
        setTime(now);
        setDiff(0);
        selectOption(options[n]);
    }


    if ((TIMEOUT - diff) <= 0) {
        randomChoice();

        let now = new Date().getTime();
        setTime(now);
        setDiff(0);
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
            <button onClick={() => {randomChoice()}}>
                Can't decide
            </button>

            <br />
            time left {Math.floor((TIMEOUT - diff)/1000)}


        </div>
    );
}

export default Compare;