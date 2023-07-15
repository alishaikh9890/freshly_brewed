import React from 'react'
import "./Navbar.css"
import Logo from "./../../assets/Logo.png"
import Vector from "./../../assets/Vector.png"


function Navbar2() {
  return (
    <div className='Navbar'>
    <div className='nav'>
        <img className="logo" src={Logo} />

        <div className='filter'>Filter  </div>
<img className='vector' src={Vector} />
        <div className='aboutUs'>About Us</div>

        <div className='blog'>Blog</div>

    </div>

</div>
  )
}

export default Navbar2