import React from 'react'
import {CgGym } from 'react-icons/cg';
import"./Procedure.css"
import { ORDER } from '../../DISPLAY';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Procedure = () => {
  const[gym,setGym]=useState(ORDER)
  const filterOrder=(order)=>{
 setGym(ORDER.filter((x)=>{return x.title===order}))
  }
  return (
  <div className="procedurepage">
    <div className="procedurelink">
        <ul className="group">
            <li onClick={()=>filterOrder("First Training Class")} className="plink"><CgGym size={46}className="gymlogo"/><h4 className="headlink">First Training Class</h4></li>
            <li onClick={()=>filterOrder("Second Training Class")}className="plink" ><CgGym size={46}className="gymlogo"/><h4 className="headlink">Second Training Class</h4></li>
            <li onClick={()=>filterOrder("Third Training Class")} className="plink"><CgGym size={46}className="gymlogo"/><h4 className="headlink">Third Training Class</h4></li>
            <li onClick={()=>filterOrder("Fourth Training Class")}className="plink" ><CgGym size={46}className="gymlogo"/><h4 className="headlink">Fourth Training Class</h4></li>
        </ul>
        <Link to="/"className="viewall">View All Shedules</Link>
    </div><div className="presentright">
    {gym.map((x)=>(<div className="display"key={x.id}>
        <img src={x.image} alt="Not Supported"className="orderimage"/>
        <h3 className="imagetitle">{x.title}</h3>
        <p className="orderpara">{x.description}</p>
        <Link to="/"className="view">View Shedules</Link>
    </div>))}</div>
  </div>
  )
}
export default Procedure