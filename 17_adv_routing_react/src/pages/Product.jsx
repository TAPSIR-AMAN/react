import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  const men = () => {

  }
  const women = () => {
    return
  }
  return (
    <div className='flex flex-col justify-center items-center font-extrabold text-4xl '>
      <h2 className='items-center text-amber-400'>Product Page</h2>
      <div className='h-80% flex justify-center items-center pt-50 gap-8 '>
        <Link to="/product/men"><button className='bg-gray-800 rounded py-2 px-5'>Men</button></Link>
        <Link to="/product/women"><button className='bg-gray-800 rounded py-2 px-5'>Women</button></Link>
        <Link to="/product/kid"><button className='bg-gray-800 rounded py-2 px-5'>Kid</button></Link>
      </div>
      {/* <h1>Product page</h1> */}
      <Outlet />
    </div>

  )
}

export default Product
