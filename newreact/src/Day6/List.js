export default function List()
{
    const animals=["dog","monkey","cat","cow"]
    const result=animals.map((ant,index)=><li key={index}>{index} {ant}</li>)
    return(
        <div>
            <ul type="none">
                {result}
            </ul>
        </div>
    )
}