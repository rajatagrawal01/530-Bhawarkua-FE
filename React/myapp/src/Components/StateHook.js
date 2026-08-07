import React, { useState } from 'react'

export default function StateHook() {
    const [count, setCount] = useState(0);
    const [name,setName] = useState("");
    const [age,setAge] = useState(0)


    function increase(){
        setCount(count+1);
    }
    function decrease(){
        setCount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

            <h1>Hi, Your name is {name} and Your Age is {age}</h1>
            <input onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />
            <input onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your Age'/>
        </div>
    )
}
