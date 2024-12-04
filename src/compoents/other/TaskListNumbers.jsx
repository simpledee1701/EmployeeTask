import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className=' rounded-xl p-10 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-2xl font-medium' >New Task</h3>
      </div>
      <div className=' rounded-xl p-10 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-2xl font-medium' >Completed Task</h3>
      </div>
      <div className=' rounded-xl p-10 w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-bold text-gray-900'>{data.taskCount.active}</h2>
        <h3 className='text-2xl font-medium text-gray-900' >Accepted Task</h3>
      </div>
      <div className=' rounded-xl p-10 w-[45%] bg-orange-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-2xl font-medium' >Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
