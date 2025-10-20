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

  const [copy, setCopy] = useState([])


  const getData = async () => {
    // const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response.data.name);
    // const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(data);

    // const {image}=await axios.get('https://picsum.photos/v2/list')
    // console.log(image)//this wont give destructure

    const data1 = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    console.log(data1.data)

    setCopy(data1.data)




  }


  return (
    <div className='p-div'>
      <div className='newdiv'>
        <button onClick={() => { getData() }}>add img</button>

        {copy.map((e, idx) => {

          return <div>
            <h1 id={idx}>{e.id}</h1>
            <img src={e.download_url
            } alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default App
