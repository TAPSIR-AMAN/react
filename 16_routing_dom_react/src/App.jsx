import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Navbar from './Navbar'
import Store from './page/Store'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/store' element={<Store />} />
      </Routes>
      <div className="foot">
        <h2>this is footer</h2>
      </div>
    </div>
    
  )
}

export default App
