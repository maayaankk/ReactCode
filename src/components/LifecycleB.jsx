import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mayank'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('LifecycleB ComponentDidMount')
    }
    
    render() {
        console.log('LifecycleB Rendered')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB