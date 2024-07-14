import React from 'react'
import"./Contact.css"
import firebase from '../../Config'

import { useState } from 'react'
const Contact = () => {
 const[userData,setUserData]=useState({
  Name:"",Email:"",Subject:"",Message:"", });
  let name, value
  console.log(userData)
  const PostUserData= (event) => {
    name=event.target.name;
    value=event.target.value;
  setUserData({...userData,[name]: value})


  }
  const SubmitData=async(event)=>{
    event.preventDefault();
    const{Name,Email,Subject,Message }=userData
    const res= await fetch("https://rational-text-403908-default-rtdb.firebaseio.com/UserDataRecords.json",
    {
      method:"POST",
      headers:{"Content-Type":"application/json",},
      body:JSON.stringify({Name,Email,Subject,Message })
    })
    if (res) {
      alert("Data Stored");
    }else{
      alert("Pliz fill the data")
    }
  }
  return ( <div className="contacthome">
    <div className="contactpage">
    <div className="googlemap">
      <img src="" alt="Oops Not Applicable" className="map"/>
    </div>
    <div className="form">
      <div className="cform">
        <form action="POST">
          <div className="contactdetails">
            <input type="text" value={userData.Name} onChange={PostUserData}placeholder="Your Name*"className="contactname"/>
            <input type="email"value={userData.Email}onChange={PostUserData} placeholder="Your Email*"className="contactemail"/>
          </div>
          <input type="text"value={userData.Subject} onChange={PostUserData} placeholder="Subject*"className="contactsubject"/>
          <textarea name=""  cols="30" rows="12" value={userData.Message} onChange={PostUserData} placeholder="Message"className="contactmessage"></textarea>
          <button type="submit" onClick={SubmitData} className="btn">Send Message</button>
        </form>
      </div>
    </div>
  </div>
  <div className="footpage">
    <div className="footerone">
    Copyright &copy;<span>2023 Willy's Studio - Designed by</span>
    <span className="footercolor">William Kinyua</span>
  </div>
  <div className="footertwo">
    <span>Distributed by:</span><span className="footercolor"> Theme Unknown</span>
  </div>
  </div>
    
  </div>
  )
}

export default Contact