import { useState } from 'react'

export default function Counter() {
    let [count, setCount] = useState(0);
    const update =()=>{
        setCount(++count);
    }

    const decrease = ()=>{

    }
    const reset = ()=>{

    }
    return (
        <div>
            <>
            <h1>Count: {count}</h1>
            <button onclick={update}></button>
            <button onclick={decrease}></button>
            <button onclick={reset}></button>
            </>
        </div>
    )
}