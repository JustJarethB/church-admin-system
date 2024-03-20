import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg-slate-900 text-slate-100 min-h-screen p-2'>
      <App />
    </div>
  </React.StrictMode>,
)
