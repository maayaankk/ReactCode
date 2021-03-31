import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    changeCounter = () => {
            this.setState({
                count: this.state.count + 1
            })
    }
    render() {
        return (
            <div>
                <h2>count: {this.state.count}</h2>
                <button onClick = {() => this.changeCounter()}>Increment</button>
            </div>
        )
    }
}

// import React, { useState } from 'react'

// function Counter() {
//             const [counter, setCounter] = useState(0);
//             const [decreaseCounter, setDecreaseCounter] = useState(setCounter)
//             return (
//                 <div>
//                     <p>{counter}</p>
//                     <button onClick = {() => setCounter(counter+1)}>Increase counter</button>
//                 </div>
//         )
// }

// export default Counter
