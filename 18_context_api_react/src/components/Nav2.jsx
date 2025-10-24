import React, { useContext } from 'react'
import { ThemeContextData } from '../context/Themecontext'
import { ColorData } from '../context/Color'

const Nav2 = ({theme}) => {//destructuring
   const [data,setTheme]= useContext(ThemeContextData)
     const [color, setColor] = useContext(ColorData)  // Correct destructuring
     console.log(data);
     

  return (
      <div className='nav2'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>{color}</h3>
        <h3>{data}</h3>
        <h4>{theme}</h4>
    </div>
    
  )
}

export default Nav2
