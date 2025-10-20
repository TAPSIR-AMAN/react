import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './components/Card';
const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index + 1}&limit=21`)
    setUserData(response.data)
  }




  let printUser = <h3 className='text-gray-600 absolute top-1/2 left-1/2 -translate-x-1 -translate-y-1'>Loadind...</h3>
  if (userData.length > 0) {
    printUser = userData.map((e, idx) => {
      return <div id={idx}>
        <Card elem={e} />
      </div>
    })
  }

  useEffect(() => {
    getdata();
    console.log("hello");
  }, [index]);


  return (
    <div className='bg-black overflow-auto h-screen pt-10  text-white'>
      <div className='h-[82%] flex gap-x-10 flex-wrap pl-10 '>
        {printUser}
      </div>
      <div className='flex justify-center items-center gap-4 mt-8'>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            if (index > 1) {
              setUserData([])
              setIndex(index - 1)

            }
          }}
        >
          Prev

        </button>
        <h3>page {index}</h3>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            setUserData([])
            setIndex(index + 1)

          }}

        >
          Next

        </button>
      </div>
    </div>
  )
}
export default App
