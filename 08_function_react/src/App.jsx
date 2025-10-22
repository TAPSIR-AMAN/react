// import React from 'react'

// const App = () => {
//   // const btn=()=>{
//   //   console.log("click on me")
//   // }
//   const change=(elem)=>{
//     console.log("change is "+elem);
    
//   }
//   const pagescroll=(elem)=>{
//    if (elem>0) {
//     console.log("seeda scrolling");
    
//    }else{
//     console.log("ulta scrolling");
    
//    }
    
//   }
//   return (

//     <div onWheel={(elem)=>{
//       pagescroll(elem.deltaY)
//     }}>
//       {/* <h1>hello</h1>
//       <button  onClick={btn}>click me</button>
//       <button onClick={function(){
//         console.log("dont click on me")
//       }}>this is new</button> */}
// {/* 
//       <input onChange={function(elem){
//         change(elem.target.value)
        
//       }} type="text" name="" id=" " placeholder='Enter ur name' /> */}

//       {/* <div onMouseMove={(elem)=>{
//         console.log(elem.pageX);
        
//       }} className="box"></div> */}

//       {/* <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div> */}
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {
  const [theame, setTheame] = useState("Light")
  return (
    <div>
      <h1>the theame is {theame}</h1>
      <Navbar theame={theame} setTheame={setTheame}/>
    </div>
  )
}

export default App
