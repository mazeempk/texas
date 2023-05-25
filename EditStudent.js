import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/addStudent.css";
import Sidebar from "./SideBar";


export default function EditStudent() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [student, setStudent] = useState({
        fname: "",
        lname: "",
        phone: "",
        gender: "",
        email: ""

      });
      const { product_name, product_price, product_description } = student;
      const onInputChange = e => {
        setStudent({ ...student, [e.target.name]: e.target.value });
      };
     
      useEffect(() => {
        loadUser();
      }, []);
     
      const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`/student/${id}`, student);
        navigate('/students')
        // history.push("/");
      };
     
      const loadUser = async () => {
        const result = await axios.get(`/student/${id}`);
        setStudent(result.data);
      };
      return (
        <>
        <Sidebar></Sidebar>
 <div className="page-wrapper bg-white p-t-130 p-b-100 font-poppins">
    <div className="wrapper wrapper--w680">
      <div className="card card-4">
        <div className="card-body">
          <h2 className="title">Update Student </h2>
          <form onSubmit={e => onSubmit(e)} method="POST">
            <div className="row row-space">
              <div className="col-2">
                <div className="input-group">
                  <label className="label">first name</label>
                  <input
                    className="input--style-4"
                    type="text"
                    name="name"
                    value={student.fname}
                    onChange={e => onInputChange(e)}

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
                    value={student.lname} 
                    onChange={e => onInputChange(e)}

                    
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
                      value={student.phone} 
                      onChange={e => onInputChange(e)}

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

                        checked={student.gender === 'male'}
                        onChange={e => onInputChange(e)}


                        name="gender"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="radio-container">
                      Female
                      <input type="radio"
                        value="female"

                        checked={student.gender === 'female'}
                        onChange={e => onInputChange(e)}

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
                  <input className="input--style-4" type="email" name="email" value={student.email}
                    onChange={e => onInputChange(e)}
                                     />
                </div>
              </div>
              <div className="col-2">

              </div>
            </div>
            <div className="input-group">
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
      );
    };
     

