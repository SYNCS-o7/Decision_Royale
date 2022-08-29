import React, { useState, useEffect } from 'react'
import './Compare.css';

function Compare({
    options,
    selectOption
}) {
    const TIMEOUT = 5000;
    const [time, setTime] = useState(new Date().getTime());
    const [diff, setDiff] = useState(0);

    const select = (n) => {
        let now = new Date().getTime();
        setTime(now);
        setDiff(0);
        selectOption(options[n]);
    }  

    const randomChoice = () => {
        let choice = Math.round(Math.random());
        console.log("random selecting ", choice);
        select(choice);
    }


    useEffect(() => {
        

        var updateTime = setInterval(() => {

            let now = new Date().getTime();
            setDiff(now - time);
            // if (diff >= TIMEOUT) setTime(now);
        });

        

        return () => {
          clearInterval(updateTime);
        }
      }, [time]);

    useEffect(() => {
        if (diff >= TIMEOUT) {
            console.log("timeout made random choice");
            console.log("diff is", diff);
            randomChoice();
        }
    });


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

    

    let active = 'begin';
    if (diff > 100) {
        active = 'full'
    }

    let tran1 = 200;
    let left_button = '';
    let right_button = '';
    if (diff < tran1) {
        let percent = diff / tran1;
        left_button = {opacity: `${percent}`, scale: `${percent}`}
        right_button = {opacity: `${percent}`, scale: `${percent}`}
    } else if (diff >= tran1) {
        left_button = {opacity: `1`, scale: `1`}
        right_button = {opacity: `1`, scale: `1`}
    }

    return(
        <div className='choices'>
            <div className="pair-decision">
                <button style={left_button} onClick={() => {select(0)}}>
                    {options[0]}
                </button>
                <h1 className='inbetween'>or</h1>
                <button style={right_button} onClick={() => {select(1)}}>
                    {options[1]}
                </button>
            </div>
            <div className='random'>
                <button onClick={() => {randomChoice()}}>
                    Can't decide
                </button>
            </div>
            <div className='timer'>
                {Math.floor((TIMEOUT - diff)/1000) + 1}
            </div>
            <div className='bar' id='timebar' 
            style={{width: `${(TIMEOUT - diff) / TIMEOUT * 100}%`}}
            />
        </div>
    );
}

export default Compare;