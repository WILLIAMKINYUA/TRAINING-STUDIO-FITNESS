import React from 'react'
import{Link}from "react-router-dom"
import"./Program.css"
import {PiWavesBold} from 'react-icons/pi';
import {CgGym } from 'react-icons/cg';
const Program = () => {
  return (<div className="programpage">
    <div className="mainabout">
      <div className="titlebar">
        <h3 className="titletopic"><span className="aboutspan">Choose </span><span className="aboutspantwo">Progam</span></h3>
      <div className="aboutwave"><PiWavesBold size={40}/></div>
      <p className="titlepara">Training Studio is free CSS template for gyms and fitness centers.
       You are allowed to use this layout for your business website</p>
      </div>

<div className="abody">
      <div className="sectionsector">
        <div className="lefth">
          <div className="sectorone">
        <div className="aboutlogo"><CgGym size={80}/></div> 
          <div className="aboutbasic">
         <h3 className="aboutsubtitle">Basic Fitness</h3>
         <p className="sectorpara">Please do not re-distribute this template ZIP file on any template collection website. 
         This is not allowed.</p>
         <Link to="/" className="aboutlink"> DISCOVER MORE</Link>
          </div>
          </div>

          <div className="sectorone">
          <div className="aboutlogo"><CgGym size={80}/></div>
          <div className="aboutbasic">
         <h3 className="aboutsubtitle">New Gym Training</h3>
         <p className="sectorpara">If you wish to support TemplateMo website via PayPal, please feel free to contact us.
          We appreciate it a lot.</p>
         <Link to="/"className="aboutlink"> DISCOVER MORE</Link>
          </div>
          </div>


          <div className="sectorone">
          <div className="aboutlogo"><CgGym size={80}/></div>
          <div className="aboutbasic">
         <h3 className="aboutsubtitle">Basic Muscle Course</h3>
         <p className="sectorpara">Credit goes to <a href="https://www.pexels.com/">Pexels website </a>for images and video background used in this HTML template.</p>
         <Link to="/"className="aboutlink"> DISCOVER MORE</Link>
          </div>
          </div>
         
        </div>

        <div className="righth">
        <div className="spacing">

          <div className="sectoroner">
          <div className="aboutlogoright"><CgGym size={80}/></div>
          <div className="aboutbasic">
         <h3 className="aboutsubtitle">Advanced Muscle Course</h3>
         <p className="sectorpara">You may want to browse through 
          <a href="https://templatemo.com/tag/digital-marketing"> Digital Marketing</a> or
          <a href="https://templatemo.com/tag/corporate"> Corporate</a>  HTML CSS templates on our website.</p>
         <Link to="/" className="aboutlink"> DISCOVER MORE</Link>
          </div>
          </div>
          
          
          <div className="sectoroner">
          <div className="aboutlogoright"><CgGym size={80}/></div>
          <div className="aboutbasictwo">
         <h3 className="aboutsubtitle">Yoga Training</h3>
         <p className="sectorpara">This template is built on Bootstrap v4.3.1 framework. 
         It is easy to adapt the columns and sections.</p>
         <Link to="/" className="aboutlinktwo"> DISCOVER MORE</Link>
          </div>
          </div>

          
          <div className="sectoroner">
          <div className="aboutlogoright"><CgGym size={80}/></div>
          <div className="aboutbasic">
         <h3 className="aboutsubtitle">Body Building Course</h3>
         <p className="sectorparaone">Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi.
          Integer nibh sapien, vehicula et auctor.</p>
         <Link to="/"className="aboutlink"> DISCOVER MORE</Link>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div></div>
  </div>
    
  )
}

export default Program