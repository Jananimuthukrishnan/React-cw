import React, { Component } from 'react'
export default class DefaultProps extends Component
{
    render(props)
    {
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
DefaultProps.defaultProps={
    name:"skct"
}