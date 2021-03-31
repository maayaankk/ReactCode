import React, { Component } from 'react'
import Counter from './components/Counter.jsx'
import FetchingData from './components/FetchingData.jsx'
import FunctionalCounter from './components/FunctionalCounter.jsx'
import Greet from './components/Greet.jsx'
import Hello from './components/Hello.jsx'
import  Message  from './components/Message.jsx'
import Welcome from './components/Welcome.jsx'
import FunctionClick from './components/FunctionClick.jsx'
import ClassClick from './components/ClassClick.jsx'
import EventBind from './components/EventBind.jsx'
import ParentComponent from './components/ParentComponent.jsx'
import ConditionalRendering from './components/ConditionalRendering.jsx'
import ListRendering from './components/ListRendering.jsx'
import Form from './components/Form.jsx'

export default class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <div className = 'App-header'>
        {/* <Greet name = "Mayank" heroname = 'IronMan'/>
         <Welcome name = "Mack" />
        <Hello name = "Michale" />  */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <FunctionalCounter /> */}
        {/* <FetchingData /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <ConditionalRendering /> */}
        {/* <ListRendering /> */}
        <Form />
        </div>
      </div>
    )
  }
}
