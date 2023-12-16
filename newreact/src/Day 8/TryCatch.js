import React from 'react'

export default function TryCatch({fruit}) {
 try{
    if(fruit === 'onion')
    {
        throw new Error ("not a fruit")
    }
 }
 catch(error)
 {
    console.log("not a fruit");
    document.write(error)
 }

 return(
    <div>
        {fruit}
    </div>
 )
}

