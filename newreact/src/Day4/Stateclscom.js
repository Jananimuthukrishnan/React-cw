import React, { Component } from "react";
class Stateclscom extends Component 
{
    state={
        color:"black",
        price:150
    }
    handleChange=()=>{this.setState({color:"Pink"})}
    render()
    {
        return(
            <div>
                <h1>{this.state.color} {this.state.price}</h1>
                <button onClick={this.handleChange}>Cick me</button>
            </div>
        )
    }
}
export default Stateclscom;