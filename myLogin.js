import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = { username, password };

    fetch('http://localhost:5000/logins', {
        // mode: 'no-cors',

      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData),

    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then(data => {
        // Store the received token in a cookie or local storage
        // document.cookie = `token=${data.token}; path=/`;
        // Redirect or perform any other action
      })
      .catch(error => {
        // console.error('An error occurred:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;