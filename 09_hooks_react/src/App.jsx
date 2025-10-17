import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const inc=()=>{
    setNum(num+1)
  }
  const dec=()=>{
    setNum(num-1)

  }
  const re=()=>{
    setNum(0)

  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={re}>Reset</button>

    </div>
  )
}

export default App
