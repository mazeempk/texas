import React, { useState } from 'react';
import axios from 'axios';


const StudentLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUserLogin = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to the backend login API endpoint for user
      const response = await axios.post('http://localhost:5000/student/login', {
        email,
        password
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
<div className="wrapper">
  <div className="title-text">
    <div className="title login"> Login </div>
    {/* <div className="title signup">Signup Form</div> */}
  </div>
  <div className="form-container">
    <div className="slide-controls">
      {/* <input type="radio" name="slide" id="login" defaultChecked="" />
      <input type="radio" name="slide" id="signup" /> */}
      <label htmlFor="login" className="slide login">
        Student
      </label>
      <label htmlFor="signup" className="slide signup">
        Teacher
      </label>
      <div className="slider-tab" />
    </div>
    <div className="form-inner">
      <form onSubmit={handleUserLogin} className="login">
        <pre>{"            "}</pre>
        <div className="field">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Student Email Address" required=""  />
        </div>
        <div className="field">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="" />
        </div>
        <div className="pass-link">
          <a href="#">Forgot password?</a>
        </div>
        <div className="field btn">
          <div className="btn-layer" />
          <input type="submit" defaultValue="Login" />
        </div>
        <div className="signup-link">
          Create an account <a href="">Signup now</a>
        </div>
      </form>
      
    </div>
  </div>
</div>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default StudentLoginForm;
