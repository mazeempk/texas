import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import Logo from '../images/logo.png'
import loginPic from '../images/teacher.png'

import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Link,useNavigate } from "react-router-dom";
import LoginForm from "./myLogin";



const TeacherLogin = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  

  const handleUserLogin = async (e) => {
    e.preventDefault();
  
    try {

  
      const response = await axios.post("http://localhost:5000/teacher/login", {email, password},{ withCredentials: true } );

      console.log(response.status);
      if (response.status==200){
        window.alert("Successful login");
        navigate("/tdashboard");
      }
    } catch (error) {
      // Handle error response
      // setErrorMessage(error.response.data.message);
    }
  };



  return (
    <>  
    <div className="teacherPic">
        <img src={loginPic} alt="loginPic"></img>
    </div>
    <div className="head1"><p1>Let there be light, let there be education</p1></div>
    <div className="head2"><Link className="learn" to="#"><p1>Learn more</p1></Link></div>


      <div className="login-form">
        <form onSubmit={handleUserLogin}>
          <h1>Teacher</h1>
          <h2> Welcome back! </h2>
          <img src={Logo} alt="logo"></img>

          <div className="content">
            <label className="label1"> Email </label>

            <div className="input-field">
              <div className="icon1">
              <FontAwesomeIcon icon={faEnvelope} />

              </div>
           <input type="email" id="email"value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Enter your email" autocomplete="nope" />
            </div>
            <label className="label2"> Password </label>

            <div className="input-field">
              <input
                type="password"
                id="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                autocomplete="new-password"
              />
            </div>
            <a href="#" className="link">
              Forget Password?
            </a>
          </div>
          <div className="action">
            <Link to="/login"><button className="first" type="button">Student</button></Link>
            <Link to="/adminlogin"><button className="second" >Admin</button></Link>
          </div>
          <div className="submit">
            <button type="submit">Sign In</button>
          </div>
          <div className="passIcon">
            <RiLockPasswordFill />
          </div>
          <div className="emailIcon">
            <MdEmail />
          </div>          
          
          <div className="google">
            <button type="button">Sign In with Google</button>
          </div>
          <div className="googleIcon">
            <FcGoogle />
          </div>
        </form>
      </div>
      <div className="adminLogin">
        <p>Are you New?</p>
      </div>
      <div className="adminLogin1">
        <p>Contact Here</p>
      </div>
    </>
  );
};
export default TeacherLogin;
