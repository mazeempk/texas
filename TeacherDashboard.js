import React ,{ useEffect, useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/studentDash.css";

export default function TeacherDashboard() {
    let navigate = useNavigate();
    const [teacherData, setTeacherData] = useState('')

    const callAboutPage = async ()=>{
        try {
    
          const response = await axios.get("http://localhost:5000/tdashboard",{ withCredentials: true });
    
          console.log(response.data);
        const teacherData = response.data
        setTeacherData(teacherData)          
    
        } catch (error) {
          console.log(error)
          navigate('/teacherlogin')
          
          // Handle error response
          // setErrorMessage(error.response.data.message);
        }
      
      }
      useEffect(()=>{
        callAboutPage();
      }  , [] )
    

    const handleLogout= async()=>{
        const response = await axios.post('/teacherlogout',{ withCredentials: true })
        navigate('/teacherlogin')
      }
  return (
    <>
        <h1>Teacher Dashboard</h1>
        <button className='Logout' onClick={handleLogout}>Logout</button>
        <h1 className='myName'>Welcome {teacherData.fname}</h1>
        <h1 className='myEmail'>Email {teacherData.email}</h1>


    </>
  
  )
}
