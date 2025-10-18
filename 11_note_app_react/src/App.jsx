import React, { useState } from 'react'

const App = () => {
  const [heading, setHeading] = useState("")
  const [Detail, setDetail] = useState("")
  const [task, settask] = useState([])


  const handle = (e) => {
    e.preventDefault()
      
    const copyTask=[...task]
    copyTask.push({heading,Detail})
    settask(copyTask)
    

    setHeading('')
    setDetail('')
  }
  const deleteN=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    settask(copyTask)


  }

  return (
    <div className='bg-black lg:flex justify-between h-screen text-white'>
      
      <form className='flex flex-col gap-4  items-start w-1/2 p-10 ' onSubmit={(e) => {
        handle(e)
      }}>
        <h1 className='text-center w-full  text-2xl'>Add Notes</h1>
          <input
            type="text"
            placeholder='Enter Note Heading'
            value={heading}
            onChange={(elem) => {
              setHeading(elem.target.value)
            }}
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          />
          <textarea

            type="text"
            placeholder='Enter Detail'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded h-32'
            value={Detail}
            onChange={(elem)=>{
              setDetail(elem.target.value)
            }}  

          />
          <button className='bg-white active:bg-gray-200 font-medium w-full text-black outline-none rounded px-5 py-2'>Add Note</button>
        
      </form>
      <div className='w-1/2 lg:border-l-2 max-lg:border-t-2 p-10 overflow-auto'>
            <h1 className='text-center text-2xl'>Recent Notes</h1>
            <div className='flex gap-4 flex-wrap pl-6 mt-4'>
              {task.map((elem,idx)=>{

                return <div id={idx} className="mt-4 w-50 h-70 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/010/793/873/non_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] text-white rounded-2xl" >
                  <h1 onClick={()=>{
                    deleteN(idx)
                  }} className='cursor-pointer'>❌</h1>
                  <h1 className='text-black text-center capitalize pt-6 text-2xl font-bold' >{elem.heading}</h1>
                  <p className='text-gray-500   text-xl  mt-3 ml-4'>{elem.Detail}</p>

                </div>
              })}

            </div>
      </div>
    </div>
  )
}

export default App
