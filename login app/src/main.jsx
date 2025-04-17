import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './style1.css'
import './styleLoginForm.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
