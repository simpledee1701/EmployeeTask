import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext)
  return (
    <div  className='bg-neutral-950 mt-5 p-4 rounded '>
      <div className='bg-red-500 mb-2 px-4 py-2 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
      </div>
      <div>
      {userData.map(function(em,idx){
        return (<div key={idx} className=' border-2 border-emerald-600 mb-2 px-4 py-2 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg font-medium text-lg font-medium'>{em.firstname}</h2>
        <h3 className='w-1/5 text-lg font-medium text-blue-400'>{em.taskCount.newTask}</h3>
        <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{em.taskCount.active}</h5>
        <h5 className='w-1/5 text-lg font-medium'>{em.taskCount.completed}</h5>
        <h5 className='w-1/5 text-lg font-medium text-red-600'>{em.taskCount.failed}</h5>
          </div>)
      })}
      </div>

      
    </div>
  )
}

export default AllTask
