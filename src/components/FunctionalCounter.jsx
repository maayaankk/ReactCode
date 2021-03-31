import React, { useState } from 'react'

function FunctionalCounter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
           <p>count: {counter}</p>
            <button onClick = {() => setCounter(counter+1) }>Increment</button>
            <button onClick = {() => setCounter(counter-1) }>Decrement</button>
        </div>
    )
}

export default FunctionalCounter
