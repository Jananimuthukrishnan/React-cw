import React from 'react';
function DisplayName(props)
{
    return(
        <div>
            <h1>
                {props.name}
            </h1>
        </div>
    )
}
export default function Listprops()
{
    const studentName=["A","B","C","D"]
    const stName=studentName.map((stu)=><DisplayName name={stu}></DisplayName>)
    return(
        <div>
            <ul>
                <li>
                  <h6>{stName}</h6>
                  </li>
            </ul>
        </div>
    )
}