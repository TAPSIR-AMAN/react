import React from 'react'

const App = () => {
  const user={
    user:"Aman",
    age:20,
    location:"kalimpong"
  }

  localStorage.setItem("User",JSON.stringify(user))
  
  let a=localStorage.getItem("User")
  console.log( (JSON.parse(a)));
  
  return (
    <div>
      
    </div>
  )
}

export default App
