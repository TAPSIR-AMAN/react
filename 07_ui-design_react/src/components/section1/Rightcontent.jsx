import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id="right" className='h-full overflow-x-auto flex rounded-4xl flex-nowrap gap-10 p-6 w-2/3'>
      {props.user.map(function(elem,idx){
        return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent
