import axios from 'axios'
import React, { useState } from 'react'
const App = () => {

  // const getData=async()=>{
  //   const response=await fetch('https://jsonplaceholder.typicode.com/users')
  //   const json=await response.json()
  //   console.log(response);
  //   console.log(json);
  // }

  // const datata=()=>{
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(()=>{
  //     console.log("this is now complete")
  //   })
  // }
const [Mdata, setData] = useState([])
const [copy, setCopy] = useState([])


const getData=async()=>{
  // const response=await axios.get('https://jsonplaceholder.typicode.com/users')
  // console.log(response.data.name);
  // const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
  // console.log(data);
  
  // const {image}=await axios.get('https://picsum.photos/v2/list')
  // console.log(image)//this wont give destructure

  const {data}= await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
  // console.log(data)
  const poklist=data;
  
  setCopy(poklist)
  console.log(copy)

  
  

}


  return (
    <div>
      <button onClick={()=>{getData()}}>add img</button>

      {/* {copy.map((e,idx)=>{
        
        return <div>
          <h1>{e.name}</h1>
          <img src={e.url} alt="" />
        </div>
      })} */}
    </div>
  )
}

export default App
