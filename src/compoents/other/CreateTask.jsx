import React , {useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext)
  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [catagory, setcatagory] = useState('')
  const [NewTask, setNewTask] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault()
    setNewTask({taskTitle,taskDescription,taskDate,catagory,active:false,newTask:true,failed:false,completed:false})
    const data = userData;
    data.forEach(function (elem) {
      if(assignTo==elem.firstname){
        elem.tasks.push(NewTask)
        //elem.tasksCount.newTask = elem.tasksCount.newTask+1;
      }
    });

    setUserData(data);
    console.log(data);

    setassignTo('')
    setcatagory('')
    settaskDate('')
    settaskDescription('')
    settaskTitle('')
  }
  return (
    <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} 
        className='flex flex-wrap w-full bg-neutral-950 items-start justify-between mt-5 p-5'
        > 
          <div className='w-[50%]'>
            <div className='p-2'>
              <h3 className='text'>Task Title</h3>
              <input 
              value={taskTitle}
              onChange={(e)=>{
                settaskTitle(e.target.value)
              }}
              className="border-2 border-white-200 bg-transparent placeholder:text-gray-300 rounded  p-1 w-[80%]" type="text" placeholder='Make a UI design' 
              />
            </div>
            <div className='p-2'>
              <h3>Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>{
                settaskDate(e.target.value)
              }}
              className="border-2 border-white-200 bg-transparent  rounded placeholder:text-gray-300 p-1 w-[80%]" type='date' />
            </div>
            <div className='p-2'>
              <h3>Assign To </h3>
              <input 
              value={assignTo}
              onChange={(e)=>{
                setassignTo(e.target.value)
              }}
              className="border-2 border-white-200 bg-transparent  rounded placeholder:text-gray-300 p-1 w-[80%]" type='text' placeholder='Employee Name'/>
            </div>
            <div className='p-2'>
              <h3>Catoegory</h3>
              <input 
              value={catagory}
              onChange={(e)=>{
                setcatagory(e.target.value)
              }}
              className="border-2 border-white-200 bg-transparent  rounded  placeholder:text-gray-300 p-1 w-[80%]" type="text" placeholder='design,dev,etc' />
            </div>
          </div>
          
          <div className='w-[50%]'>
          <h3>Description</h3>
          <textarea 
          value={taskDescription}
          onChange={(e)=>{
            settaskDescription(e.target.value)
          }}
          className="w-full border-2 border-white bg-transparent rounded " name='' id='' cols="30" rows="10" ></textarea>
          <button className='w-full bg-emerald-500 hover:bg-emerald-600 rounded p-2 mt-1'>Create Task</button>
          </div>
          
          
        </form>
      </div>
  )
}

export default CreateTask
