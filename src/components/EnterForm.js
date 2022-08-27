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
    }

    return(
        <>
            <form  onSubmit={handleSubmit} className='option_input' >
                <input type="text" placeholder='Enter Option' value={newOption} onChange={handleChange} />
            </form>
        </>
    )
}