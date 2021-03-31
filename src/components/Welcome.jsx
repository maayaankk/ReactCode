// Class Component.
import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        
        return (
            <div>
                <h3>Hello i am class component and my name is {this.props.name}</h3>
            </div>
        )
    }
}

