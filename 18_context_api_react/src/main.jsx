import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themecontext from './context/Themecontext.jsx'
import Color from './context/Color.jsx'

createRoot(document.getElementById('root')).render(

  <Themecontext>
    <Color>
      <App />
    </Color>
  </Themecontext>

)
