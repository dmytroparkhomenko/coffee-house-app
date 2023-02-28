import React from 'react'
import { StrictMode } from "react"
import ReactDOM from 'react-dom/client'

import './index.scss'
import App from './pages/app/app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)