import { useState } from 'react'
import './App.css'
import ConsoleLogForm from './components/CustomHookAssignment/ConsoleLogForm'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <ConsoleLogForm></ConsoleLogForm>
    </>
  )
}

export default App
