import React from 'react'
import Navbar from './navbar'
import Page1content from './Page1content'

const section1 = (props) => {
  
  return (
    <div >
      <Navbar />
      <Page1content user={props.user}/>
    </div>
  )
}

export default section1
