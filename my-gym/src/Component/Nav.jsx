import React from 'react'
import"./Nav.css"
import{Link}from"react-router-dom"
const Nav = () => {
  return (<div className="navhead">
<div className="header">

 <h3 className="title"><span className="first">Training</span><span className="second">Studio</span></h3>
<div className="gap"><div className="crack">
  <Link to="/" className="navlink">HOME</Link>
<Link to="/about" className="navlink">ABOUT</Link>
<Link to="/classes" className="navlink">CLASSES</Link>
<Link to="/shedules" className="navlink">SHEDULES</Link>
<Link to="/contact" className="navlink">CONTACT</Link></div></div>
<div className="signup">
    <Link to="/signup" className="buttonsign">SIGN UP</Link>
</div>

</div>

</div>
  )
}

export default Nav