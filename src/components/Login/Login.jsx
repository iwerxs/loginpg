import React, { useState } from 'react';
import "./Login.css";

import user_icon from '/src/assets/person.png'
import user_company from '/src/assets/home.png'
import email_icon from '/src/assets/email.png'
import password_icon from '/src/assets/password.png'

const Login = () => {
  const [action,setAction] = useState("Login");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:<div><div className='input'>
            <img src={user_icon} alt="user" />
            <input type="text" placeholder='Name' />
          </div><br></br>
          <div className='input'>
            <img src={user_company} alt="company" />
            <input type="text" placeholder='Company' />
          </div></div>}
          
          <div className='input'>
            <img src={email_icon} alt="email" />
            <input type="email" placeholder='Email' />
          </div>
          <div className='input'>
            <img src={password_icon} alt="pswd" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password: <span>Click here</span></div>}
        
        <div className="submit-container">
          <div className={action==="Login"?"submit gold":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gold":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    </>
  )
}

export default Login