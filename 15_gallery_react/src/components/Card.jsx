import React from 'react'

const Card = (props) => {
  return (
      <a href={props.elem.url} target="_blank">
                <div className='h-40 w-40 bg-white rounded-2xl overflow-hidden'>
                  <img src={props.elem.download_url} alt="" className='w-full h-full' />
                </div>
                <h1 className='text-lg font-bold w-40 '>{props.elem.author}</h1>
              </a>
    
  )
}

export default Card
