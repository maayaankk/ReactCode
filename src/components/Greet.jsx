// Functional components.
import React from 'react';

const Greet = (props) => {
    console.log(props)
    return (

        <h3>Hello  my name is {props.name} my fav super hero is {props.heroname}</h3>
        
    )
}

export default Greet;
