import { useState } from "react"
export default function Countfunc()
{
    const[count,setCount]=useState(0);
    const changec=()=>setCount(count+1);
    return(
        <div>
            <h1>The count is {count}</h1>
            <button onClick={changec}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </div>
    )
}
