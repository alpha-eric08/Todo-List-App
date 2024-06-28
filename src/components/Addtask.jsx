import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';

const Addtask = () => {
const [todolist, setTodo] =useState([]);
const [newTask, setNewtask] =useState("");

const handleChange = (event) => {
  setNewtask(event.target.value);
};

const newtodo = () => {
  const task = {
    id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id + 1,
  taskName: newTask,
};
  setTodo([...todolist, task]);
};

const deleteTask = (id) => {
  setTodo(todolist.filter((task) => task.id !== id))
};

  return (
    <div className='mt-8 mb-12'>
        <div className='bg-blue-600 rounded-lg flex border-2 border-gray-300 mb-12'>
            <input type="text" onChange={ handleChange } placeholder='New Task' className=' h-10 rounded-l-lg pl-2 w-full bg-gray-100 text-black'/>
            <button className='text-white font-semibold px-4  hover:bg-blue-900 rounded-r-lg' onClick={ newtodo }>ADD</button>
        </div>
        <div>
          {todolist.map((task) => {
            return(
              <div className='flex justify-between bg-gray-200 text-black h-12 my-5 shadow-lg shadow-slate-700  rounded-lg text-2xl px-2'>
                <div className='flex'>
                  <input type="checkbox" />
                  <h1 className='mt-2 ml-2 text-lg'>{task.taskName}</h1>
                </div>
                <div>
                  <MdClose onClick={() => deleteTask(task.id)} className='bg-blue-400 rounded-full text-white hover:bg-blue-950 cursor-pointer mt-2' size={30}/>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default Addtask