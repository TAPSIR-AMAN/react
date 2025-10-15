import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
      <Card user="Aman" img="https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" />
      <Card user="Tapsir" img="https://images.unsplash.com/photo-1755210888583-6e0dc16ee35b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" />
      <Card user="Sumit" img="https://plus.unsplash.com/premium_photo-1739104471549-3fba06cd43e8?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Q0R3dXdYSkFiRXd8fHx8fDJ8fDE3NjA0Mzg4ODN8&ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=356&dpr=2&h=540" />
      <Card user="Yash" img="https://plus.unsplash.com/premium_photo-1736544095568-701023fee17c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" />
    </div>
  )
}

export default App
