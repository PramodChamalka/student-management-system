import { useState } from 'react'
import './App.css'
import Home from './Home'
import StudentsView from './components/student/StudentsView'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/comman/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h2>Hello</h2>
      {/* <Home />
      <StudentsView /> */}
      
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/view-students" element={<StudentsView />} />
        </Routes>
      </Router>
        
    </>
  )
}

export default App
