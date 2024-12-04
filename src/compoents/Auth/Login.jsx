import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const submitHandler = (e)=>{
        //console.log("Email is : ",email);
        //console.log("Pwd is :",password);
        e.preventDefault();
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='rounded-xl p-20 border-2 border-emerald-600'>
        <form onSubmit={submitHandler}
        className='flex flex-col items-center justify-center w-80'>
            <input 
            value = {email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }
            }
            required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl px-3 py-4 rounded-xl placeholder:text-grey-400 w-full' type='email' placeholder='Enter your email'/>
            <input 
            value = {password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }
            }
            required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl px-3 py-4 rounded-xl mt-3 placeholder:text-grey-400 w-full' type='password' placeholder='Enter your password'/>
            <button className='text-black outline-none   bg-emerald-600 text-xl px-3 py-4 rounded-xl mt-5 w-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
