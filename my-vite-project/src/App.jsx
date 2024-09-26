import { useState } from 'react'
import './App.css'
import { UserCardAssignment } from './components/AssignmentParentComponents/UserCardAssignment'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <UserCardAssignment></UserCardAssignment>
    </>
  )
}

export default App
