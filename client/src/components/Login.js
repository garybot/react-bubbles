import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const Login = (props) => {
  const [userCredentials, setUserCredentials] = useState({username: "", password:""});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    axiosWithAuth()
      .post(`http://localhost:5000/api/login`, userCredentials)
      .then(res => {
        console.log(res);
        setErrorMessage('');
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblepage');
      })
      .catch(err => {
        setErrorMessage(err.message);
      })
  }

  const handleChanges = evt => {
    setUserCredentials({
      ...userCredentials, 
      [evt.target.name]:evt.target.value
    });
  }
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>Username: 
          <input type="text" name="username" id="username" placeholder="username" value={userCredentials.username} onChange={handleChanges} />
        </label>
        <label>Password:     
          <input type="text" name="password" id="password" placeholder="password" value={userCredentials.password} onChange={handleChanges} />     
        </label>
      {
        errorMessage ? <p style={{color: 'red'}}>Invalid Username or Password</p> : null
      }
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
