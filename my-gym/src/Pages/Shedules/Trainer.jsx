import {React,useState} from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoTwitter } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { Profile } from '../../Trainers';
import"./Trainer.css"
const Trainer = () => {
    const[train,setTrain]=useState(Profile)
    const filterTrain=(profile)=>{
   setTrain(Profile.filter((x)=>{return x.title===profile}))
    }
  return (<div className="trainerpage">
   {train.map((x)=>(<div className="displays"key={x.id}>
    <div className="trainersector">
        <img src={x.image}alt="Not found"className="trainerimage" />
        <h6 className="subtitlet">{x.title}</h6>
        <h3 className="namet">Bret D. Bowers</h3>
        <p className="trainerpara">Bitters cliche tattooed 8-bit distillery mustache.
         Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
         <div className="social">
            <FaFacebookF className="icon"/>
          <BiLogoTwitter className="icon"/>
           <FaLinkedinIn className="icon"/>
             <FaWhatsapp className="icon"/></div>
    </div>


 </div>))}
  </div>
    
  )
}

export default Trainer