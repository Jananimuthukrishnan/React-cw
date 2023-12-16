import React,{ useState } from 'react'
export default function Twowaybind()
{
    const[name,setname]=useState("")
    const cn=(event)=>setname(event.target.value)
    return(
        <div>
            <input onChange={cn} value={name}></input>
            <p>{name}</p>
        </div>
    )
}