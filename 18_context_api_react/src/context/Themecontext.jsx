import React, { createContext, useState } from 'react'

export const ThemeContextData=createContext()
const Themecontext = (props) => {
  const [theme, setTheme] = useState("Aman")
  return (
    <div>
      <ThemeContextData.Provider value={[theme,setTheme]}>
        {props.children}
      </ThemeContextData.Provider>
    </div>
  )
}

export default Themecontext
