import React, { useState, useEffect } from 'react'

function Compare({
    options,
    removeOption
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

    const selectOption = (n) => {
        if (n===1) {
            removeOption(options[1]);
        } else {
            removeOption(options[0]);
        }
    };

    let randomPickInfo = '';

    if ((TIMEOUT - diff) <= 0) {
        let select = Math.floor(Math.random()*2);
        removeOption(options[select]);

        let now = new Date().getTime();
        setTime(now);
        setDiff(0);

        randomPickInfo = 
        <>
            chosen {options[0]};
        </>
    }


    return(
        <div>
            Pick your option<br/>
            <button onClick={() => {selectOption(1)}}>
                {options[0]}
            </button>
            <button onClick={() => {selectOption(2)}}>
                {options[1]}
            </button>

            <br />
            time left {Math.floor((TIMEOUT - diff)/1000)}

            <br/>

            {randomPickInfo}


        </div>
    );
    
}

export default Compare;