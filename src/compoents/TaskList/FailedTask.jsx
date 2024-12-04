import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-orange-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 text-sm px-3 py-1 rounded-xl'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4> 
        </div>
        <h2 className='mt-5 font-medium text-2xl '>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex mt-4'>
            <button className='w-full bg-red-500'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
