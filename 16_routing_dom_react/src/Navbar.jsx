import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="nav">
        <h2>Coolfix</h2>
        <div className="item">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/Store'>Store</Link>
        </div>
      </div>
  )
}

export default Navbar
