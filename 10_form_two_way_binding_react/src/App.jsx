import React, { useState } from 'react'

const App = () => {
  const onsubmit=(e)=>{
    e.preventDefault()
    console.log("submited by "+name);
    setName('')
    
    
  }
  const [name, setName] = useState('')  
  return (

    <div>
      <form onSubmit={(e)=>{
        onsubmit(e)
      }}>
        <input 
        type="text" 
        placeholder='enter you name'
        value={name} 
        onChange={(elem)=>{
          setName(elem.target.value)
        }}
        />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
