import React from 'react'
import Navbar2 from "./../Navbar/Navbar2"
import Footer from "./../Footer/Footer"
import mentor_img from "./../../assets/mentor_img.png"
import { Outlet, Link } from "react-router-dom";

function MentorFill() {
  return (
    <div className='Mentor'>
    <div><Navbar2/></div>

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

{/*///////////////////// CREDENTIAL ////////////////////////////////////////////*/}

    <h2 style={{position:"absolute", top:"426px"}} className='mentor_name'>Full Name</h2>
    <h2 style={{position:"absolute", top:"561px"}}  className='mentor_email'>Email</h2>
    <h2 style={{position:"absolute", top:"686px"}}  className='mentor_password'>Choose a password</h2>

    <input style={{position:"absolute", top:"460px"}}  className='mentor_name_input' type="text" />
    <input style={{position:"absolute", top:"595px"}}  className='mentor_email_input' type="email" />
    <input style={{position:"absolute", top:"724px"}}  className='mentor_password_input' type="password" />

    <Link to="/mentor2">
    <button style={{position:"absolute", top:"841px"}} className='mentor_next_button'>Next</button>
    </Link>
{/*///////////////////// FOOTER ////////////////////////////////////////////*/}

        <div style={{position:"absolute", top:"1052px"}} className='mentor_footer'> <Footer/></div>
    </div>
  )
}

export default MentorFill