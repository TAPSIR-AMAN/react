import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const user=[
    {
      
      color:"royalblue",
      img:"https://plus.unsplash.com/premium_photo-1661578248908-85e78e6d6c9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"",
      tag:"Fulfilled"
    },
    {
      color:"black",
      img:"https://plus.unsplash.com/premium_photo-1661590850278-9a4d2f6116d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"",
      tag:"Satisfied"
    },
    {
      color:"orange",
      img:"https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"",
      tag:"Underserved"
    },
    {
      color:"lightgreen",
      img:"https://plus.unsplash.com/premium_photo-1661575258771-2899b67898ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"",
      tag:"UnderBanked"
    },
    {
      color:"pink",
      img:"https://plus.unsplash.com/premium_photo-1661729968988-ca585d9da659?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"",
      tag:"Cash-dependent"
    },
  ]
  return (
    <div>
      <Section1 user={user}/>
      <Section2 />
    </div>
  )
}

export default App
