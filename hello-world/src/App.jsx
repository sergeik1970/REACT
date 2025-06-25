import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Counter />
        <Greet />
        <Welcome name="John" heroName="Superman"/>
        <FunctionClick />
        <ClassClick />
        <EventBind />
      </div>
      {/* <Message />
      <Greet name="John" heroName="Superman"><p>Children props</p></Greet>
      <Greet name="Jane" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Jim" heroName="Wonder Woman" />
      <Welcome name="John" heroName="Superman" />
      <Welcome name="Jane" heroName="Batman" />
      <Welcome name="Jim" heroName="Wonder Woman" /> */}
    </>
  )
}

export default App
