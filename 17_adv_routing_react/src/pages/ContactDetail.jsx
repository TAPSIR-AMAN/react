import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetail = () => {
    const param= useParams()
    
    
  return (
    <div>
      <h1>{param.id} Contact-Detail</h1>
    </div>
  )
}

export default ContactDetail
