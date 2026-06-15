import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Title} from './components/Title'
import {NavBar} from './components/NavBar'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
         <Title/>
         <NavBar/>
      <App />
    </BrowserRouter>
  </StrictMode>
)
