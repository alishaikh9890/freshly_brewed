import React from 'react'
import "./Mentor.css"
import Navbar from "./../Navbar/Navbar"
import Footer from "./../Footer/Footer"
import mentor_img from "./../../assets/mentor_img.png"
import { Outlet, Link } from "react-router-dom";
import mentor_linkedIn from "./../../assets/mentor_linkedIn.png"
import mentor_google from "./../../assets/mentor_google.png"

function Mentor() {
  return (
    <div className='Mentor'>
    <div><Navbar/></div>

    <img className='mentor_img' src={mentor_img} />
    
    
{/*///////////////////// HEADERS ////////////////////////////////////////////*/}

        
    <div className='mentor_head'>Great choice to help people!</div>
     <div className='mentor_subhead'>Tell us few details about you & your expertise...</div>


{/*///////////////////// PROGRESS BAR ////////////////////////////////////////////*/}


    <div className='progress'>
        <div className='one'><p>1</p></div>
        <div className='bar'></div>
        <div className='two'><p>2</p></div>
        <div className='bar'></div>
        <div className='three'><p>3</p></div>
    </div>


{/*///////////////////// AUTHENTICATION ////////////////////////////////////////////*/}


    <div className='mentor_login'>
    <div className='mentor_login_sub'>
        <div>
            <img src={mentor_google} />
            <p>Continue with Google</p>
        </div>
        <p>or</p>
        <div>
            <img style={{width:"25px", height:"25px"}} src={mentor_linkedIn} />
            <p>Continue with linkedIn</p>
        </div>
   </div>
    </div>


{/*///////////////////// CREDENTIAL ////////////////////////////////////////////*/}

    <h2 className='mentor_name'>Full Name</h2>
    <h2 className='mentor_email'>Email</h2>
    <h2 className='mentor_password'>Choose a password</h2>

    <input className='mentor_name_input' type="text" />
    <input className='mentor_email_input' type="email" />
    <input className='mentor_password_input' type="password" />

    <Link to="/mentorfill">
    <button className='mentor_next_button'>Next</button>
    </Link>
{/*///////////////////// FOOTER ////////////////////////////////////////////*/}

        <div className='mentor_footer'> <Footer/></div>
    </div>
  )
}

export default Mentor