import React, { useEffect, useState } from 'react'



const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(10)
  let numchange=()=>{
    console.log("the value of a is changed");
  }
  let num2change=()=>{
    console.log("the value of b is changed");
  }

  

  useEffect(() => {
    numchange()
  },[num])
  
  useEffect(() => {
    num2change()
  }, [num2])
  
  return (
    <div>
      <h1>num  :{num}</h1>
      <h1>num2 :{num2}</h1>
      <button onClick={()=>{
        setnum(num+1)
        
      }}>change a </button>
      <button onClick={()=>{
        setnum2(num2+10)
      }}>change b</button>
    </div>
  )
}

export default App
