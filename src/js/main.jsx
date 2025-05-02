import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import CounterDisplay from './components/CounterDisplay';

let count = 0;

setInterval(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <CounterDisplay counter={count} />
    </React.StrictMode>,
  )
  count++
}, 1000)