import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kid from './pages/Kid'
import ContactDetail from './pages/ContactDetail'
import Naving from './pages/Naving'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Naving />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/:id' element={<ContactDetail />} />
        
        
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} >

          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kid' element={<Kid />} />

        </Route>


        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

// useNavigate,useParams
//  <Route path='/contact/:id' element={<ContactDetail />} 