import axios from 'axios';
import React, { useState }from 'react'

export default function PostAxios() {
    const[name,setName]=useState('');

    const handlechange=(event)=>{setName(event.target.value)}

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/user',{name})
        .then(res=>{console.log(res.data)})
    }
  return (
    <div>
      <h1>Axios</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handlechange}></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
