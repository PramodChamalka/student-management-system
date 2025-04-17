import { useState } from 'react'
import './App.css'
import Home from './Home'
import StudentsView from './components/student/StudentsView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h2>Hello</h2>
      <Home />
      <StudentsView />
        
    </>
  )
}

export default App
