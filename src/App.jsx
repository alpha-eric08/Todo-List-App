import React, { useEffect, useState } from 'react'
import Todo_app from './components/Todo_app'
import Footer from './components/Footer'


function App() {
  const [darkMode, setDarkMode] = useState(false)
useEffect(()=>{
  console.log(darkMode)
},[darkMode])
  return (
    <div className={`grid place-content-center ${darkMode ? "bg-[#331e7e] text-white":"bg-gray-200"} h-screen w-screen`} >
      <Todo_app setDarkMode={setDarkMode} darkMode={darkMode} />
      <Footer />
    </div>
  )
}

export default App