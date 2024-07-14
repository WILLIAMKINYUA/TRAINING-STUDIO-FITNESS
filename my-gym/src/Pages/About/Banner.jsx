import React from 'react'
import { Link } from 'react-router-dom'
import"./Banner.css"

const Banner = () => {
  return (<div className="banner">
    <div className="aboutbanner">
        <div className="bcontent">
            <h2 className="bannerheader"><span>Don't</span><span className="bcolor"> think</span>
            <span>, begin</span><span className="bcolor"> today</span><span>!</span></h2>
        <p className="bpara">Ut consectetur, metus sit amet aliquet placerat, enim est 
        ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi
         luctus imperdiet.</p>
         <Link to="/classes" className="blink">Become a member</Link>
        </div>
    </div>
  </div>
    
  )
}

export default Banner