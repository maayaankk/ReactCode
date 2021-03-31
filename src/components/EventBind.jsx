import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: 'Hello'
         }
        //  this.clickHandler = this.clickHandler.bind(this)
     }
    //  clickHandler(){
    //      this.setState({
    //          message: 'You have clicked the button...'
    //      })
    //      // This will give us an error as 'this' keyword if we console.log() will return value of undefined
    //      // Therefore EventBinding is necessary in Rect.
    //  }

         clickHandler = () => {
             this.setState({
                 message: 'Goodbye!'
             })
         }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
                <button onClick = {this.clickHandler}>Click</button>

             {/*1. using .binding(this) :- Binding in the render method
                2. use arrow function :- () => {} in the render method 
                3. Best =>(Official used in react document):- binding the eventHandler in the constructor() method
                4. using arrow function as the class property
                We should stick to 2 3 0r 4*/}

            </div>
        )
    }
}

export default EventBind
