import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import "../styles/studentDash.css";
import Sidebar from './SideBar';
import "../styles/layout.css";
import Hand from '../images/hand.png'
import Users from '../images/user1.png'
import StudentsPic from '../images/user4.png'
import TeacherPic from '../images/user3.png'
import SearchBar from './SearchBar';
export default function Admin() {
    const [adminData, setAdminData]=useState({})
    let navigate = useNavigate();
  
    const [studentCount, setCount] = useState(0);
    const [teacherCount, setTeacherCount] = useState(0);
  
    useEffect(() => {
      fetchStudentCount();
    }, []);
  
    const fetchStudentCount = async () => {
      try {
        const response = await axios.get('/students/count' ,{ withCredentials: true })
        console.log(response.data.count)
        setCount(response.data.count);
      } catch (error) {
        console.error('Error fetching student count:', error);
      }
    };
    useEffect(() => {
      fetchTeacherCount();
    }, []);
  
    const fetchTeacherCount = async () => {
      try {
        const response = await axios.get('/teachers/count' ,{ withCredentials: true })
        console.log(response.data.count1)
        setTeacherCount(response.data.count1);
      } catch (error) {
        console.error('Error fetching student count:', error);
      }
    };
    
    
  
    const callAboutPage = async ()=>{
      try {
  
        const response = await axios.get("http://localhost:5000/admins",{ withCredentials: true });
        console.log(response.status)
  
        const adminData= (response.data);
        console.log(response.data)
        setAdminData(adminData)
        // console.log(response.status);
  
        // if(response.status ===200){
        //         navigate('/about')
  
        // }
        // else{
        //   navigate('/')
  
        // }
      
  
      } catch (error) {
        
        // console.log(error)
        navigate('/adminlogin')
  
        // Handle error response
        // setErrorMessage(error.response.data.message);
      }
    
    }
    useEffect(()=>{
      callAboutPage();
    }  , [] )
  return (
    <>
    <Sidebar></Sidebar>

    <div className='nameAdmin'>Hello Admin! </div>
        <img className=" myHand"src={Hand} alt='hand' />
        <div className='name1'>Let's do something amazing </div>


    </>
  )
}
