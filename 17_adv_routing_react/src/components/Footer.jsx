import React from 'react'

const Footer = () => {
  return (
    <div className='absolute bottom-0 w-full'>
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-white">Tapsir Services</h2>
          <p className="text-sm">Professional Refrigeration & Appliance Repair</p>
        </div>
        
        {/* Center Links */}
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Side */}
        <div className="text-sm mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} Tapsir Aman. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer
