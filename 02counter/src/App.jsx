import { useState } from 'react'        //hooks comes from this import
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)              //counter is ame as we made let counter and set counter is function

  //let counter = 5

  const addValue = () => {
   // counter += 1
     if (counter < 20) {
    setCounter(counter + 1)
  }       //same working as counter +=1
  }

  const decreaseValue = () => {
    if(counter > 0) {
    setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React Learnings</h1>
      <br/>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Increase value {counter}</button>
      
      <button
      onClick={decreaseValue}
      >Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
