import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import Logo from '../images/logo.png'
import loginPic from '../images/login4.png'

import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Link,useNavigate } from "react-router-dom";



const AdminLogin = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const handleUserLogin = async (e) => {
    e.preventDefault();

  //   const res = await fetch("http://localhost:5000/login",{
  //     method : "POST",
  //     credentials:"include",
  //     headers: { 'Content-Type' : 'application/json' }
  //     ,
  //     body: JSON.stringify({
  //       email, password
  //     })
  //   }
  //   );

  //   const session = await res.json();
  //   console.log(session)
  // }

  
    try {

  
      const requestData = {
        email: email,
        password: password
      };
      const response = await axios.post("http://localhost:5000/admin/login", {email, password},{ withCredentials: true } );

      console.log(response.status);
      if (response.status==200){
        window.alert("Successful login");
        navigate("/admin");
      }
    } catch (error) {
      // Handle error response
      // setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>  
    <div className="loginPic">
        <img src={loginPic} alt="loginPic"></img>
    </div>
    <div className="head1"><p1>Taking administration to the next level.</p1></div>
    <div className="head2"><Link className="learn" to="#"><p1>Learn more</p1></Link></div>


      <div className="login-form">
        <form onSubmit={handleUserLogin}>
          <h1>Admin</h1>
          <h2>Welcome back!</h2>
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
          <Link to="/login"><button className="first">Student</button></Link>
            <Link to="/teacherlogin"><button type= "button"className="second">Teacher</button></Link>
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
export default AdminLogin;
