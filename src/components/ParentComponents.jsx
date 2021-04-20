import React, { Component } from 'react'
import PureComponents from './PureComponents'
import RegularComponents from './RegularComponents'

export class ParentComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mayank'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Mayank'
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent Component Render')
        return (
            <div>
                Parent
                <RegularComponents name={this.state.name} />
                <PureComponents name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponents
