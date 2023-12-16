import React, { Component } from 'react'
export default class Propscls extends Component{
    render()
    {
        return(
            <div>
                <h1>I'm Studying at {this.props.college}</h1>
            </div>
        )
    }
}