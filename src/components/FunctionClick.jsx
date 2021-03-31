import React, { useState } from 'react'

function FunctionClick() {
    // Event handler is not a function call insted it is just a function.
    const [handler, setHandler] = useState('Click');
    function clickHandler(){
         console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick = {clickHandler}>{handler}</button>
        </div>
    )
}

export default FunctionClick
