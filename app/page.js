"use client"
import React, { useState } from 'react'

const page = () => {
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
 const [mainTask, setmainTask] = useState([])
  const userSubmit=(e)=>{
    e.preventDefault();
    setmainTask([...mainTask, {Title ,desc}]);
    setTitle("");
    setdesc("");

  }
  const deleteHandler=(i)=>{
      let copyTask=[...mainTask];
      copyTask.splice(i,1);
      setmainTask(copyTask);

  }
  let renderTask=<h1>No task available</h1>
  if(mainTask.length>0){
    renderTask=mainTask.map((e,i)=>{
      return <li key={i} className='flex items-center justify-center'>
         <div className='flex justify-between mb-5 w-2/3'>
        <h5 className='text-xl font-semibold'>{e.Title}</h5>
        <h6 className='text-lg font-medium'>{e.desc}</h6>
        <button onClick={()=>{
      deleteHandler(i)
        }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </div>
      </li>
    })
  }

  return (
    <>
    <h1 className='bg-black text-white p-5 font-bold text-center text-5xl'>My Todo List</h1>
    <form onSubmit={userSubmit} >
      <input type='text' placeholder='Enter the title'  className='border-zinc-800 border-4 m-10 px-4 py-2 text-2xl' value={Title}  onChange={(e)=>{
        console.log(e.target.value);
        setTitle(e.target.value);
      }}></input>
      <input type='text' placeholder='Enter desriptionn'  className='border-zinc-800 border-4 m-10 px-4 py-2 text-2xl ' value={desc} onChange={(e)=>{
        setdesc(e.target.value);
      }}></input>
      <button className='bg-black text-white text-center px-2 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-400'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page