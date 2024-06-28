import React from 'react'
import { IoMoonSharp } from "react-icons/io5";



const Header = () => {
  return (
    <div className='flex justify-between text-lg'>
        <div>Todo App</div>
        <div><IoMoonSharp /></div>
    </div>
  )
}

export default Header