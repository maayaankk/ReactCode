import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick= {() => props.greetParent('Child')}>Greet Parent</button>
            {/* Passing parameters in the method */}
        </div>
    )
}

export default ChildComponent
