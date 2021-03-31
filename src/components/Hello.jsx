// Class component
import React, { Component } from 'react'

export default class Hello extends Component {
  
    render() {
        
        return (
            <div>
                <h3>I am a Hello component and my name is {this.props.name}</h3>
            </div>
        )
    }
}
