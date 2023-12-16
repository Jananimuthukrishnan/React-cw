import React from 'react'
export default function list()
{
    const college=[{id:1, sn:"sachin",age:26},
    {id:2, sn:"sachin",age:36}]
    const dis=college.map((col)=><li key={col.id}>{col.sn} {col.age}</li>)
    return(
        <div>
            <h1>
                list of students
            </h1>
            {dis}
        </div>
    )
}