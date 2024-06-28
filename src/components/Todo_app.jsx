import React from 'react'
import Header from './Header'
import Addtask from './Addtask'

const Todo_app = () => {
  return (
    <div className='bg-white text-black w-[500px] px-4 py-5 rounded-xl mt-20 shadow-xl shadow-gray-400'>
      <Header />
      <Addtask />
    </div>
  )
}

export default Todo_app