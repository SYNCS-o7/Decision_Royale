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

            if (diff >= TIMEOUT) setTime(now);

        });
        return () => {
          clearInterval(updateTime);
        }
      }, [time]);


    useEffect(() => {
        const listener = event => {
            console.log(event.code)
            if(event.code === "ArrowLeft") {
                select(0);
            }
            if (event.code === "ArrowRight") {
                select(1);
            }
            if (event.code === "ArrowDown") {
                randomChoice();
            }
        };

        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [options]);

    const select = (n) => {
        let now = new Date().getTime();
        setTime(now);
        setDiff(0);
        console.log("Choice ", n, " ", options[n]);
        selectOption(options[n]);
    }

    const randomChoice = () => {
        let choice = Math.round(Math.random());
        select(choice);
    }

    if (diff >= TIMEOUT) {
        randomChoice();
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