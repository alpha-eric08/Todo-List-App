import React from 'react'
import Header from './Header'
import Addtask from './Addtask'

const Todo_app = ({setDarkMode,darkMode}) => {
  return (
    <div className= {`${darkMode ? "bg-[#1a103d] text-white shadow-gray-400" : "bg-white text-black shadow-black"}  w-[500px] px-4 py-5 rounded-xl mt-20 shadow-xl `}>
      <Header setDarkMode={setDarkMode}/>
      <Addtask setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Todo_app