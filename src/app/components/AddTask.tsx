import React from 'react'

const AddTask = () => {
  return (
    <form className='mb-4 space-y-3'>
        <input type="text" 
        className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-pink-400'/>
        <button className='w-full px-4 py-2 text-white bg-pink-400 roudend transform hover:bg-pink-300 hover:scale-95 duration-200'>
            Add Task</button>
    </form>
  )
}

export default AddTask