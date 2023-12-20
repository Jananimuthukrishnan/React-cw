import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export default function PutAxios() {
    const[id,setId]=useState('');
    const handleId=(event)=>{setId(event.target.value)}
    const handleSubmit=(event)=>{
        axios.put(`http://localhost:3000/user/${id}`)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{console.log("Error occured "+error)})
    }
  return (
    <div>
        <h1>Axios Delete</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' value={id} onChange={handleId}></input>
            <button type='submit'>delete</button>
        </form>
    </div>
  )
}