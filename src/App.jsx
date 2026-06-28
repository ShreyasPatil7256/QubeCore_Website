import { Body } from './Components/Body'
import { Routes, Route } from 'react-router-dom'
import { MotherBoards } from './Components/MotherBoards'
import { CPUs } from './Components/CPUs'
import { GPUs } from './Components/GPUs'
import { RAMs } from './Components/RAMs'
import { About } from './Components/About'
import { Layout } from './Components/Layout'
import Protected from './Protected'
import Home    from './Components/Home'
import Login   from './Components/Login'
import Signup  from './Components/Signup'

const P = ({ children }) => <Protected><Layout>{children}</Layout></Protected>

function App() {
  return (
    <Routes>
      <Route path="/"             element={<Home />} />
      <Route path="/login"        element={<Login />} />
      <Route path="/signup"       element={<Signup />} />
      <Route path="/Body"         element={<P><Body /></P>} />
      <Route path="/About"        element={<P><About /></P>} />
      <Route path="/MotherBoards" element={<P><MotherBoards /></P>} />
      <Route path="/CPUs"         element={<P><CPUs /></P>} />
      <Route path="/GPUs"         element={<P><GPUs /></P>} />
      <Route path="/RAMs"         element={<P><RAMs /></P>} />
    </Routes>
  )
}

export default App