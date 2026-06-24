import { Body } from './Components/Body'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MotherBoards } from './Components/MotherBoards'
import { CPUs } from './Components/CPUs'
import { GPUs } from './Components/GPUs'
import { RAMs } from './Components/RAMs'
import { About } from './Components/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/About" element={<About />} />
      <Route path="/MotherBoards" element={<MotherBoards />} />
      <Route path="/CPUs" element={<CPUs />} />
      <Route path="/GPUs" element={<GPUs />} />
      <Route path="/RAMs" element={<RAMs />} />
    </Routes>
  )
}

export default App
