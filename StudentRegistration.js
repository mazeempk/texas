import React, { useState } from 'react';
import axios from 'axios';


export default function StudentRegistration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setConfirmPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
  
    const handleAdminLogin = async (e) => {
      e.preventDefault();
  
      try {
        // Make an HTTP POST request to the backend login API endpoint for admin
        const response = await axios.post('http://localhost:5000/student/register', {
            name, email, phone, password, cpassword
        });
  
        // Perform any desired action, such as storing the access token or redirecting to another page
        console.log(response.data);
      } catch (error) {
        // Handle error response
        setErrorMessage(error.response.data.message);
      }
    };
  
    return (
      <div>
        <h2>Student Registeration</h2>
        <form onSubmit={handleAdminLogin}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="numbers" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={cpassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <button type="submit" >Register</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  };







