import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./SideBar";


export default function EditTeacher() {
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
        await axios.put(`/teacher/${id}`, student);
        navigate('/teachers')
        // history.push("/");
      };
     
      const loadUser = async () => {
        const result = await axios.get(`/teacher/${id}`);
        setStudent(result.data);
      };
      return (
        <>
        <Sidebar></Sidebar>
        <div className="container">
         <div className="row"> 
          <div className="">
            <h2 className="">Edit A Student</h2>
            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="First Name"
                  name="fname"
                  value={student.fname}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Product Name"
                  name="lname"
                  value={student.lname}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Product Price"
                  name="phone"
                  value={student.phone}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Product Price"
                  name="gender"
                  value={student.gender}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Product Description"
                  name="email"
                  value={student.email}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <button className="btn btn-secondary btn-block">Update </button>
            </form>
           </div>
          </div> 
        </div>
        </>
      );
    };
     

