function Parent()
{
    return(
        <div>
            <h1>pc</h1>
            <Child  res={100}/>
        </div>
    )
}
function Child(props)
{
    return(
        <div>
            <h1>{props.res}</h1>
        </div>
    )
}
export default Parent;