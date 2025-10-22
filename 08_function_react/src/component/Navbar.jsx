import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <button onClick={(e)=>{
        props.setTheame("Dark")
      }}>Change The theame</button>
    </div>
  )
}

export default Navbar
