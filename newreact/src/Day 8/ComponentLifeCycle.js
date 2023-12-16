import React ,{ Component } from 'react'
export default class ComponentLifeCycle extends Component
{
    constructor(props)
    {
        super(props);
        this.state={favColor:"blue"}
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({favColor:"black"})},5000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        document.getElementById("id1").innerHTML="ps"+prevState.favColor;
    }
    componentDidUpdate()
    {
        document.getElementById("id2").innerHTML="cs"+this.state.favColor;
    }
    render()
    {
        return(
            <div>
                <h1>My fav color is {this.state.favColor}</h1>
                <p id="id1"></p>
                <p id="id2"></p>
            </div>
        )
    }
}