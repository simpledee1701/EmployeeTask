import React, { useContext, useEffect, useState } from 'react'
import Login from './compoents/Auth/Login'
import EmployeeDashboard from './compoents/Dashboard/EmployeeDashboard'
import AdminDashboard from './compoents/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user,setUser] = useState(null)
  const [LoggedInUserData,setLoggedInUserData] = useState(null);
  const [userData,setUserData]= useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role)
        setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}));
    }
    else if(userData){
      const employees = userData.find((e)=>email == e.email && e.password == password);
      if(employees){
        setUser('employees');
        setLoggedInUserData(employees);
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employees", data:employees}));
      }
    }
    else{
      alert("Invalid Credentials");
    }
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user =='employees' ? <EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/> : null)}
    </>
  )
}

export default App
