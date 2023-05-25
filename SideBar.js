import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { RxDashboard } from 'react-icons/rx';
import Logo from '../images/logo.png'
import { MdSpaceDashboard } from 'react-icons/md';
import { FaDiscourse } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { FaUserGraduate } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Sidebar = () => {
    let navigate = useNavigate();

   
    
    const handleLogoutNow= async()=>{
        const response = await axios.post('/adminlogout',{ withCredentials: true })
        navigate('/adminlogin')}

  return (
    <>
    <Sidebar></Sidebar>
    <div className="container">
        <div className="logo">
            <img src={Logo} alt="logo"></img>
        </div>
        <nav>
            <ul>
                <li className="dashboard">
                    <MdSpaceDashboard className="myIcon"/>
                    <Link to="/admindashboard">
                    Dashboard
                    </Link>
                </li>
                <li className="courses">
                    <FaDiscourse className="icon2"/>
                <Link to="/admindashboard">

                    Courses
                    </Link>

                </li>
                <li className="addStudents">
                <HiUserAdd className="icon3"/>
                <Link to="/students/add">

                    Add Student
                    </Link>

                </li>
                <li className="student">
                    <FaUserGraduate className="icon4" />
                <Link to="/students">

                    Students
                    </Link>

                </li>
                <li className="addTeacher">
                    <FaUserPlus className="icon5" />
                <Link to="/teachers/add">


                    Add Teachers
                    </Link>

                </li>
                <li className="teacher">
                    <FaUserTie className="icon6" />
                <Link to="/teachers">

                     Teachers
                     </Link>
                </li>
                <li className="logout">
                    <div className="ic">
                    <BiLogOut className="icon7" />

                    </div>
                {/* <Link to="/teachers">

                     Logout
                     </Link> */}
                </li>
            

            </ul>
            <button className="mybutton" onClick={handleLogoutNow}>Logout</button>
        </nav>


    </div>


    </>
  );
};

export default Sidebar;
