'use client'
import React, { useState } from 'react'

const page = () => {
  let [task, settask] = useState('');
  let [disc, setdisc] = useState('');
  let [maintask, setmaintask] = useState([]);
  let rendertask = 'No task available'

  const submitHandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask, { task, disc }])

    settask('')
    setdisc('')

  }
  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {

      return (
        <div className=''>
          <li key={i} className='flex justify-between px-5 mb-8'>
            <h5 className='text-2xl font-bold w-6'>{t.task}</h5>
            <h6 className='text-xl font-bold w-6'>{t.disc}</h6>
            <button onClick={() => {
              deletedata(i)
            }
            } className='bg-red-500 text-yellow-200 font-light rounded px-8 py-2'>Delete</button>
          </li>
        </div>
      )
    })
  }
  function deletedata(i) {
    let copytask = [...maintask]
    copytask.splice(i, 1)
    setmaintask(copytask)

  }
  return (
    <div >
      <h1 className='bg-blue-400 font-bold text-center text-yellow-400 p-5 text-2xl'>HareKrishna ToDo app</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter task here' className='px-4 py-2 rounded border-2 border-zinc-400 m-5 text-xl'
          value={task}
          onChange={(e) => {
            settask(e.target.value)
          }}

        />
        <input type="text" placeholder='Enter description here' className='px-4 py-2 rounded border-2 border-zinc-400 m-5 text-xl'
          value={disc}
          onChange={(e) => {
            setdisc(e.target.value)
          }}
        />
        <button className='bg-yellow-300 text-blue-400 rounded px-4 py-2 text-xl mx-5 font-bold'>Add task</button>

      </form>
      <hr />
      <div className='text-yellow-300 bg-blue-400 font-bold text-2xl p-4 my-4 '>
        <ul>
          {rendertask}
        </ul>
      </div>
    </div>
  )
}

export default page
