import React, { useState } from "react";


/**
 * Rendering, Rerendering
 * what causes rerendering?
 *  - make a change to state (this causes your ui/browser to rerender)
 *  
 * ... | spread operator
 * const myArr = ["fruit", "orange", "banana"] => [...myArr, "Kiwi"] // ["fruit", "orange", "banana"]
 * 
 */

type InputFieldType = {
    setStuffTodo: (params: string[]) => void; // function to update our list of tasks
    stuffTodo: string[]; // most current list of what we have
}

export const InputField = ({ setStuffTodo, stuffTodo }: InputFieldType) => {
    const [input, setInput] = useState(""); // input field, this keeps track of what the user is typing in 

    return (
        <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="What needs to be done? Press Enter..." />
            <button onClick={() => setStuffTodo([...stuffTodo, input])}>Add</button>
        </>
    )
}