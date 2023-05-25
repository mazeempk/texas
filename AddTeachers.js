import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

import "../styles/addStudent.css";
import Sidebar from './SideBar';


export default function AddTeachers() {
    let navigate = useNavigate();

    const [fname, setName] = useState('');
    const [lname, setLastName] = useState('');
    const [gender, setGender] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleOptionChange = (event) => {
        setGender(event.target.value);
        console.log(event.target.value)
      };


    const handleAdminLogin = async (e) => {
        e.preventDefault();
    
        try {
          // Make an HTTP POST request to the backend login API endpoint for admin
          const response = await axios.post('http://localhost:5000/teacher/register', {fname, lname, phone, gender, email, password
          }, { withCredentials: true });
    
          // Perform any desired action, such as storing the access token or redirecting to another page
          console.log(response.data);
          console.log(response.status);

          window.alert("Teacher added successfully");
          
          navigate("/teachers");
        } catch (error) {
            navigate("/adminlogin");

          // Handle error response
          setErrorMessage(error.response.data.message);
        }
      };

      const callAboutPage = async ()=>{
        try {
    
          const response = await axios.get("http://localhost:5000/teacher/register",{ withCredentials: true });
          console.log(response.status)
    
          const adminData= (response.data);
          console.log(response.data)
          // console.log(response.status);
    
          // if(response.status ===200){
          //         navigate('/about')
    
          // }
          // else{
          //   navigate('/')
    
          // }
        
    
        } catch (error) {
          
          console.log(error)
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
    <div className="page-wrapper font-poppins">
    <div className="wrapper wrapper--w680">
      <div className="card card-4">
        <div className="card-body">
          <h2 className="title">Teacher Registration </h2>
          <form onSubmit={handleAdminLogin} method="POST">
            <div className="row row-space">
              <div className="col-2">
                <div className="input-group">
                  <label className="label">First name</label>
                  <input
                    className="input--style-4"
                    type="text"
                    name="name"
                    value={fname} onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="input-group">
                  <label className="label">Last name</label>
                  <input
                    className="input--style-4"
                    type="text"
                    name="lname"
                    value={lname} onChange={(e) => setLastName(e.target.value)}
                    
                  />
                </div>
              </div>
            </div>
            <div className="row row-space">
              <div className="col-2">
                <div className="input-group">
                  <label className="label">Phone Number</label>
                  <div className="input-group-icon">
                     <input
                      className="input--style-4 js-datepicker"
                      type="text"
                      name="phone"
                      value={phone} onChange={(e) => setPhone(e.target.value)}
                    /> 
                    {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" /> */} 
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="input-group">
                  <label className="label">Gender</label>
                  <div className="p-t-10">
                    <label className="radio-container m-r-45">
                      Male
                      <input
                        type="radio"
                        defaultChecked="checked"

                        value="male"

                        checked={gender === 'male'}
                        onChange={handleOptionChange}

                        name="gender"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="radio-container">
                      Female
                      <input type="radio"
                        value="female"

                        checked={gender === 'female'}
                        onChange={handleOptionChange}
                       name="gender" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-space">
              <div className="col-2">
                <div className="input-group">
                  <label className="label">Email</label>
                  <input className="input--style-4" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="col-2">
                <div className="input-group">
                  <label className="label">Password</label>
                  <input className="input--style-4" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="input-group">
              <label className="label">Subject</label>
              {/* <div className="rs-select2 js-select-simple select--no-search"> */}
                {/* <select name="subject">
                  <option disabled="disabled" selected="selected">
                    Choose option
                  </option>
                  <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                </select>
                <div className="select-dropdown" />
              </div> */}
            </div>
            <div className="p-t-15">
              <button className="btn btn--radius-2 btn--blue" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
