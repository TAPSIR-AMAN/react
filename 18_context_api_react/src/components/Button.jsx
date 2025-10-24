import React, { useContext, useState } from 'react'
import { ThemeContextData } from '../context/Themecontext'
import { ColorData } from '../context/Color';

const Button = () => {
    
    const [theme,setTheme]=useContext(ThemeContextData);
    const [color,setColor]=useContext(ColorData)
  return (

    
    <div>
      <button
      onClick={()=>{
        setColor("Dark")
      }}
      onDoubleClick={()=>{
        setColor("Light")
      }}
      >Change theme</button>
      <button
      onClick={()=>{
        setTheme("Tapsir")
      }}>Change Name</button>
    </div>
  )
}

export default Button
