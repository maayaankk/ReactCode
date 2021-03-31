import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(ChildName){
        alert(`Hello ${this.state.parentName} from ${ChildName}`);
        // Since we are using this keyword in method we need to bind the method.
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetParent = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
