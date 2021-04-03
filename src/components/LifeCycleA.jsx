import React, { Component } from 'react'
import LifeCycleB from './LifecycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mayank'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('LifecycleA ComponentDidMount')
    }
    
    render() {
        console.log('LifecycleA Rendered')
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
