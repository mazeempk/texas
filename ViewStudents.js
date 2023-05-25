import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/newTable.css";
import DataTable from "react-data-table-component";
import "../styles/dataTable.css";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./SideBar";

export default function ViewStudents() {
  const [studentsData, setStudentData] = useState({});
  const [editingId, setEditingId] = useState(null);

  let navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`students/${id}`);
      callAboutPage();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };



  const callAboutPage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewstudents", {
        withCredentials: true,
      });
      console.log(response.status);

      const studentsData = response.data;
      console.log(response.data);
      console.log(typeof studentsData);

      setStudentData(studentsData);
    } catch (error) {
      // console.log(error)
      navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  const handleLogout = async () => {
    const response = await axios.post("/adminlogout", {
      withCredentials: true,
    });
    navigate("/login");
  };

  return (
    <>
    <Sidebar></Sidebar>
    <div className="whole">
    <div className="addButton">
            <Link to="/students/add"><button>Add New</button></Link>
        </div>
      <div className="main">
        <div class="h2 font-weight-bold">Students</div>
        <div class="table-responsive">
          <table class="table"  style={{ borderCollapse: 'separate', borderSpacing: '0 15px' }}>
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>

              </tr>
            </thead>
            <tbody>
              {studentsData.length > 0 ? (
                studentsData.map((user) => (
                  <tr  class="my" key={user._id}>

                    <td class="pl-lg- pl-md-3 pl-1 name" >{user.fname}</td>
                    <td class=" ">{user.lname}</td>
                    <td class="">{user.phone}</td>
                    <td class="pt-3">{user.email}</td>
                    {/* <td class="pt-3"><button onClick={handleDelete(user._id)}>Delete</button></td> */}
                    <td>
                      <Link class=" mr-2" to={`/students/edit/${user._id}`}>
                      <i class="fa fa-edit icon-red" aria-hidden="true"></i> 
                    </Link>
                      <Link class="" onClick={() => handleDelete(user._id)}>
                      <i class="fa fa-trash icon-delete"  aria-hidden="true"></i> 
                      </Link>
                    </td>
                  </tr> 


    
                  
                ))
              ) : (
                <tr>
                  <td colSpan={5}>No Users</td>
                </tr>
              )}
             
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );
}
