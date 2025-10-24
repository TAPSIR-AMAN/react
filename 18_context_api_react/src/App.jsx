import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'
import Button from './components/Button'

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <div>
      <Navbar theme={theme}>
        <h1>This is biru</h1>
      </Navbar>
      <Button />
     
    </div>
  )
}

export default App
