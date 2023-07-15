import React from 'react'
import "./Navbar.css"
import Logo from "./../../assets/Logo.png"
import Vector from "./../../assets/Vector.png"
function Navbar() {
  return (
    <div className='Navbar'>
    <div className='nav'>
        <img className="logo" src={Logo} />

        <div className='filter'>Filter  </div>
<img className='vector' src={Vector} />
        <div className='aboutUs'>About Us</div>

        <div className='blog'>Blog</div>

        <button className='earning' >Earning calculator</button>
    </div>

    <div 
    // style={{display:"none",backgroundColor:"red"}} 
    className='log_sign'>
     <button  className='login' >Login</button>
        <button className='signup'>Signup</button>
    </div>
</div>
  )
}

export default Navbar