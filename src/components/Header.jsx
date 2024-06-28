import React from 'react'
import { IoMoonSharp } from "react-icons/io5";



const Header = (setDarkMode) => {
  return (
    <div className='flex justify-between text-lg'>
        <div>Todo App</div>
        <button onClick={()=>setDarkMode(prv=>!prv)}><IoMoonSharp /></button>
    </div>
  )
}

export default Header