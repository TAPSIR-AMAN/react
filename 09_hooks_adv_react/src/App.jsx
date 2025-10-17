import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:"Tapsir Aman",age:22})

  const [arr, setarr] = useState([10,20,30])

  const [a, seta] = useState(0)


  const change =()=>{
    // console.log(num);
    // const newnum={...num}
    // console.log(newnum)
    // newnum.user="Sumit Prasad"
    // newnum.age=21
    // setNum(prev=>({...prev,user:"Sumit",age:21}))
    // console.log(newnum)
    // setNum(newnum)
    
    // let newarr=[...arr]
    // console.log(newarr)
    // newarr.push("40")
    // newarr = [...newarr,44, 33, 55];
    // setarr(prev => [23, 45, 46]);

    // setarr(newarr)
    
    // seta(a+1)
    // seta(a+1)
    // seta(a+1)
    //to run this we have to write this
    seta(prev=>(prev+1))
    seta(prev=>(prev+1))
    seta(prev=>(prev+1))//batch update

  }
  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1> */}
      {/* <h1>{arr.join("--")}</h1> */}
      <h1>{a}</h1>
      <button onClick={change}>click</button>
    </div>
  )
}

export default App
