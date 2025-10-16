import React from 'react'

const Rightcardcontent = (props) => {
    
    return (
        <div className='h-full absolute top-0 left-0 w-full p-8 flex flex-col justify-between '>
                <h1  className=' text-xl bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold'>{props.id+1}</h1>
                <div>
                    <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut, dolores iure reiciendis temporibus nulla!</p>
                    <div className='flex justify-between '>
                        <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                        <button style={{backgroundColor:props.color}}><i className="ri-arrow-right-line  text-white font-medium px-3 py-2 rounded-full"></i></button>
                    </div>
                </div>

            </div>
    )
}

export default Rightcardcontent
