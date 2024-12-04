import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nwrap py-5 w-full  mt-10'>

      {data.tasks.map((em,idx)=>{
        if(em.active){
          return <AcceptTask key={idx} data={em}/>
        }
        if(em.newTask){
          return <NewTask key={idx} data={em}/>
        }
        if(em.completed){
          return <CompleteTask key={idx} data={em}/>
        }
        if(em.failed){
          return <FailedTask key={idx} data={em}/>
        }
      })}
      
    </div>
  )
}

export default TaskList
