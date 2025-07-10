import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContectProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
    </Router>
    </ThemeProvider>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log result (for example: reportWebVital(console.log))
// or send to an analytics endpoint endpoint. leern more: https://bit.ly/CRA-vita
