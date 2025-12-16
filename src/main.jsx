import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {} from './App.jsx'
import LandingPage from './screens/LandingPage.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage/>
 


  </StrictMode>,
)
