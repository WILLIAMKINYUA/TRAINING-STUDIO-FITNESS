import {React,useState} from 'react'
import"./Home.css"
import { Preview } from '../../Video'
import{Link}from"react-router-dom"
const Home = () => {  const[live,setLive]=useState(Preview)
    const filterLive=(lives)=>{
   setLive(live.filter((x)=>{return x.id===lives}))
    }  
      return(<div className="homebody">
    <div className="homepage">
        {live.map((x)=>(<div className="homevideobg"key={x.id}> 
    
        <video src={x.image} alt="Video not found,Kindly reload...."loop autoPlay muted className='bgvideo' />
      </div>))}
    <div className="main">
        <h1 className="paratwo"><span className="spanone">Easy with our </span><span className="spantwo">Gym</span></h1>
      <Link to="/about" className="membership">Become a member</Link>
    </div>

  </div></div>
  )
}

export default Home