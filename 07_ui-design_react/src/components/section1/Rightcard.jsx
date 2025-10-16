import React from 'react'
import Rightcardcontent from './Rightcardcontent'


const Rightcard = (props) => {
    
    return (
        <div className='h-full w-80 overflow-hidden  relative shrink-0  bg-green-400 rounded-4xl '>
            <img className='h-full w-full object-cover' src={props.img} alt="" />

            <Rightcardcontent id={props.id} color={props.color} tag={props.tag}/>
        </div>
    )
}

export default Rightcard
