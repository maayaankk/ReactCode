import React from 'react'

function ListRendering() {
    const name = ['Mayank', 'Maya', 'Mack']
    const nameList =  name.map(name => <h2>{name}</h2>)
    return (
        <div>
            {
               nameList
            }
            {/* <h2>{name[0]}</h2>
            <h2>{name[1]}</h2>
            <h2>{name[2]}</h2> */}
        </div>
    )
}

export default ListRendering
