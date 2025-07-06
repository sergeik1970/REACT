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
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import PersonsList from './components/PersonList'
import Person from './components/Person'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
// import Input from './components/Input'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        <Counter />
        {/* <Form /> */}
        {/* <Greet /> */}
        {/* <Welcome name="John" heroName="Superman"/> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <PersonsList /> */}
        {/* <Message /> */}
        {/* Если изменить на false, то не будет работать оранжевый цвет */}
        {/* <StyleSheet primary={true} /> */}
        {/* <LifecycleA /> */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* <PureComp /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <PortalDemo /> */}
        <ErrorBoundary>
          <Hero heroName={"Batman"} />
          <Hero heroName={"Superman"} />
          <Hero heroName={"Joker"} />
        </ErrorBoundary>

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
