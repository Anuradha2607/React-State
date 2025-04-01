import { useState } from 'react'

export default function Greet() {
    let name = (Pooja);
    const update = ()=>{
        name = "Akash";
    }
    return (
        <div>
            <h1>Hello, {name}</h1>
            <button onclick={update}>Click</button>
        </div>
    )
}