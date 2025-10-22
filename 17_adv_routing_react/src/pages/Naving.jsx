import React from 'react'
import { useNavigate } from 'react-router-dom'
const Naving = () => {
     const navigate=useNavigate()
  return (
    <div className=' p-2 bg-cyan-800'>
      <button 
      onClick={()=>{navigate('/')}}
      className='bg-amber-600 p-2 font-medium rounded-xl m-3 cursor-pointer active:scale-90'>Ruturn to home page
      </button>
      <button 
      onClick={()=>{navigate(-1)}}
      className='bg-amber-600 p-2 font-medium rounded-xl m-3 cursor-pointer active:scale-90'>Back
      </button>
      <button 
      onClick={()=>{navigate(+1)}}
      className='bg-amber-600 p-2 font-medium rounded-xl m-3 cursor-pointer active:scale-90'>Next
      </button>
    </div>
  )
}

export default Naving
