import React, { useState } from 'react';
import './EnterForm.css';


export default function EnterForm ({ addTask }) {
    const [newOption, setNewOption] = useState();

    const handleChange = (e) => {
        setNewOption(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newOption)
        setNewOption("");
        //e.target.reset();
    }

    return(
        <>
            <form  onSubmit={handleSubmit} >
                <input className='option_input' type="text" placeholder='Enter option' value={newOption} onChange={handleChange} />
            </form>
        </>
    )
}