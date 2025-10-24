import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeContextData } from '../context/Themecontext'
import { ColorData } from '../context/Color'

const Navbar = (props) => {
  const [theme,setTheme]=useContext(ThemeContextData)
  const [color] =useContext(ColorData)
  console.log(color);
  
    
  return (
    <div className={color}>
        <h1>{theme}</h1>
        {props.children}
        <Nav2 theame={props.theme}/>
    </div>
  )
}

export default Navbar
