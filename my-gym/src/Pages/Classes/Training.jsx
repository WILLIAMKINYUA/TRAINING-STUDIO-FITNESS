import React from 'react'
import {PiWavesBold} from 'react-icons/pi';
import"./Training.css"
const Training = () => {
  return (<div className="trainingpage">
     <div className="trainbar">
        <h3 className="traintopic"><span className="trainspan">Our </span>
        <span className="trainspantwo">Classes</span></h3>
      <div className="trainwave"><PiWavesBold size={40}/></div>
      <p className="trainpara">Training Studio is free CSS template for gyms and fitness centers.
       You are allowed to use this layout for your business website</p>
      </div>
  </div>
  )
}

export default Training