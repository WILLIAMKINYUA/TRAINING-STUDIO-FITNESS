import React from 'react'
import"./SignUp.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const[sign,setSign]=useState({Email:"",Password:"",Checkbox:""});
   

  return (
    <div className="signupform">
      <div className="sign">
      <form action="POST" >
        <div className="formlink">
          <div className="emailbox">
            <label htmlFor="useremail">UserName: </label>
            <input type="email" name="Email" value={sign.Email} placeholder="Enter your email....." required onChange={(event)=>setSign({...sign,Email:event.target.value})}/>
            </div>
            <div className="password">
            <label htmlFor="userpassword">Password</label>
            <input type="Password" name="Password" value={sign.Password} placeholder="Enter your password....." required onChange={(event)=>setSign({...sign,Password:event.target.value})}/> 
            </div>
            <div className="robot">
              <input type="checkbox" className="checkbox" required onChange={(event)=>setSign({...sign,Checkbox  :event.target.value})}/><p className="pararobot">Are you a robot?</p>
            </div>
            <button type="submit" className="signlin" >Sign Up</button>
            <div className="signin">
    <Link to="/signin" className="buttonsignin">SIGN IN</Link>
</div>
        </div></form></div>
    </div>
  )
}

export default SignUp