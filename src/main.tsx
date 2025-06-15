import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Calculator'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Calculator />
    </div>
  </React.StrictMode>
)