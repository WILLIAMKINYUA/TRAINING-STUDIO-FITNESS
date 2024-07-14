import React, { useState } from 'react'
import './SignIn.css'
const SignIn = () => {
    const[field,setField]=useState({Name:"",Surname:"",Email:"",Telno:"",Country:""})
  return (
    <div className='signpage'><h1 className="signinhead"style={{textAlign:"center",color:"purple",fontFamily:"fantasy",textTransform:"capitalize",letterSpacing:"1px",fontSize:"34px"}}>Training Studio Fitness</h1>
    <form action="POST">
        <div className="name">
            <label htmlFor="firstname"className='label'>Name</label>
<input type="text"name='Name'value={field.Name} placeholder='First Name'className='firstname'onChange={(event) => setField({ ...field,Name:event.target.value })} />
<label htmlFor="Surname" className='labels'>Surname</label>
<input type="text" name='Surname'value={field.Surname} placeholder='Surname ...' className='surname' onChange={(event) => setField({ ...field,Surname:event.target.value })}/>
</div>
<div className="emails">
    <label htmlFor="email"className='label'>Email</label>
    <input type="email" name='Email'value={field.Email} placeholder='user@gmail.com'className='email'onChange={(event) => setField({ ...field,Email:event.target.value })}/>
</div>

    <div className="telnos">
        <label htmlFor="telno"className='label'>Telephone Number</label>
        <input type="number" name='Telno'value={field.Telno} placeholder='+25712345678'className='telephoneno' onChange={(event) => setField({ ...field,Telno:event.target.value })}/>
    </div>
    <div className="countrys">
        <label htmlFor="Country"className='label'>Country</label>
    <input type="country"name='Country' value={field.Country} placeholder='Kenya' className='country'onChange={(event) => setField({ ...field,Country:event.target.value })} />
       </div>
    <button type="submit" className="signlin">SignIn</button>

    </form>
    </div>
  )
}

export default SignIn