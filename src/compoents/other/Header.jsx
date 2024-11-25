import React from 'react'


const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    //window.location.reload();
    props.changeUser("")
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello!!<br/><span className='text-3xl font-semibold'>Arjun</span> 👋</h1>
      <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-3 rounded text-lg font-medium'>Log out</button>
    </div> 
  )
}

export default Header
