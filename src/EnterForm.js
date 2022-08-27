import React, { useState } from 'react';


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
            <form onSubmit={handleSubmit}>
                <input value={newOption} type="text" onChange={handleChange} placeholder="Enter task..."/>
                <button>Submit</button>
            </form>
        </>
    )
}