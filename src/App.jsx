import { Body } from './components/Body'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MotherBoards } from './components/MotherBoards'
import { CPUs } from './components/CPUs'
import { GPUs } from './components/GPUs'
import { RAMs } from './components/RAMs'
import { About } from './components/About'

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