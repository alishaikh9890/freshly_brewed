import React from 'react'
import "./Footer.css"
import linkedIn from "./../../assets/linkedIn.png"
import insta from "./../../assets/insta.png"
import twitter from "./../../assets/twitter.png"
import facebook from "./../../assets/facebook.png"
import c_circle from "./../../assets/c_circle.png"

function Footer() {
  return (
    <div className='footer'>
        <img className='linkedIn' src={linkedIn} />
        <img className='insta' src={insta} />
        <img className='twitter' src={twitter} />
        <img className='facebook' src={facebook} />
        <img className='c_circle' src={c_circle} />
        <div className='rights'>2023 Mentorbridge. All Rights Reserved.</div>
        <div className='contact'>Contact us</div>
        <div className='privacy'>Privacy policy</div>
        <div className='term'>Terms of use</div>
        <div className='help' >Help center</div>
        <div className='f_about' >About us</div>
        <div className='FAQs' >FAQs</div>
    </div> 
  )
}

export default Footer