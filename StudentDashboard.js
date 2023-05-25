import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import "../styles/studentDash.css";


export default function StudentDashboard() {
  const [studentData, setStudentData]=useState({})
  let navigate = useNavigate();

  const callAboutPage = async ()=>{
    try {

      const response = await axios.get("http://localhost:5000/studentdashboard",{ withCredentials: true });
      console.log(response.status)

      const stdData= (response.data);
      console.log(response.data.email)
      setStudentData(stdData)
      // console.log(response.status);

      // if(response.status ===200){
      //         navigate('/about')

      // }
      // else{
      //   navigate('/')

      // }
    

    } catch (error) {
      
      // console.log(error)
      navigate('/login')

      // Handle error response
      // setErrorMessage(error.response.data.message);
    }
  
  }
  useEffect(()=>{
    callAboutPage();
  }  , [] )

const handleLogout= async()=>{
  const response = await axios.post('/stlogout',{ withCredentials: true })
  navigate('/login')
}
  return (
    <>
        <h1>Student Dashboard</h1>
        <h1 className='myName'>Welcome {studentData.fname} {studentData.lname}</h1>
        <h1 className='myEmail'>Email {studentData.email}</h1>


        <button className='Logout' onClick={handleLogout}>Logout</button>

    </>
  )
}
