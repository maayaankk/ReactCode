import React, { Component, PureComponent } from 'react'
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
import LifeCycleA from './components/LifeCycleA.jsx'
import Fragments from './components/Fragments.jsx'
import Table from './components/Table.jsx'
import PureComponents from './components/PureComponents'
import ParentComponents from './components/ParentComponents.jsx'
import RefsDemo from './components/RefsDemo.jsx'

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
        {/* <Form /> */}
        {/* <LifeCycleA /> */}
        {/* <Fragments /> */}
        {/* <Table /> */}
        {/* <ParentComponents /> */}
        <RefsDemo />
        </div>
      </div>
    )
  }
}

