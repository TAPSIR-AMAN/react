import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-4 bg-cyan-600' >
      <h2 className='font-bold text-2xl '>Coolfix</h2>
      <div className='flex gap-8 '>
        <Link className='font-bold text-lg ' to="/">Home</Link>
        <Link className='font-bold text-lg ' to="/about">About</Link>
        <Link className='font-bold text-lg ' to="/contact">Contact</Link>
        <Link className='font-bold text-lg ' to="/Product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
