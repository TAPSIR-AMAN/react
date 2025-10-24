import React, { createContext, useState } from 'react'
export const ColorData=createContext()
const Color = ({ children }) => {
    const [color, setColor] = useState("Light")
    return (
    <ColorData.Provider value={[ color, setColor]}>
      {children}
    </ColorData.Provider>
  );
}

export default Color


