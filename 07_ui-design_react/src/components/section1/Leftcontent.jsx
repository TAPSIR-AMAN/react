import React from 'react'
import { MoveUpRight } from 'lucide-react';
import Herotext from './Herotext';
import Arrow from './arrow';
const Leftcontent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <Herotext />
      <Arrow />
      
    </div>
  )
}

export default Leftcontent
