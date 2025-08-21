import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MouseFollower } from "react-mouse-follower"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseFollower/>
    <App />
  </StrictMode>,
)
