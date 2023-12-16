import React, {useState} from 'react'
export default function StateHoldObj()
{
    const[detail,setdetail]=useState({reg:1,cn:"jin",year:2023})
    const changeDemo=()=>{
        setdetail((prevs)=>{return{...prevs,year:2004}})
    }
    return(
        <div>
            <h1>reg is {detail.reg}</h1>
            <h1>Stud name is {detail.cn}</h1>
            <h1>year {detail.year}</h1>
            <button onClick={changeDemo}>increment</button>
        </div>
    )
}