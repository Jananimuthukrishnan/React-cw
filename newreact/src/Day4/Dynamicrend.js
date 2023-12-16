import React, { useState } from 'react'
export default function Dynamicrend()
{
    const[x,setX]=useState(12)
   return(
    x>10 ? <p>greater than 10</p>:<p>less than 10</p>
   )
}