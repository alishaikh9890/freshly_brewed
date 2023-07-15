import React from 'react'
import "./Mentor2Fill.css"
import Navbar2 from "./../Navbar/Navbar2"
import Footer from "./../Footer/Footer"
import Coworking from "./../../assets/Coworking.png"
import mentor2_photo from "./../../assets/mentor2Fill_photo.png"
import upload from "./../../assets/upload.png"
import Delete from "./../../assets/delete.png"
import { Outlet, Link } from "react-router-dom";

function Mentor2Fill() {
  return (
    <div className='Mentor'>
    <div><Navbar2/></div>

    <img className='mentor_img' src={Coworking} />
    
    
{/*///////////////////// HEADERS ////////////////////////////////////////////*/}

        
    <div className='mentor_head'>Great choice to help people!</div>
     <div className='mentor_subhead'>Tell us few details about you & your expertise...</div>


{/*///////////////////// PROGRESS BAR ////////////////////////////////////////////*/}


    <div className='progress'>
        <div className='one'><p>⎷</p></div>
        <div className='bar'></div>
        <div style={{backgroundColor:"#047E70", color:"#FFFFFF"}} className='two'><p>2</p></div>
        <div className='bar'></div>
        <div className='three'><p>3</p></div>
    </div>


    {/*///////////////////// AUTHENTICATION ////////////////////////////////////////////*/}


        <img className='mentor2_photo' style={{position:"absolute", top:"430px"}} src={mentor2_photo} />
        <img className='mentor2Fill_delete' src={Delete}/>
        <div className='mentor2_upload' style={{position:"absolute", top:"462px"}}>
            <img style={{width:"20px", height:"17px"}} src={upload} />
            <p>Upload Photo</p>
        </div>
    


{/*///////////////////// CREDENTIAL ////////////////////////////////////////////*/}

    <h2 style={{position:"absolute", top:"645px"}} className='mentor_name'>Job Title</h2>
    <h2 style={{position:"absolute", top:"783px"}}  className='mentor_email'>Company</h2>
    <h2 style={{position:"absolute", top:"911px"}}  className='mentor_password'>Experience</h2>
    <h2 style={{position:"absolute", top:"1047px"}}  className='mentor_password'>Bio</h2>

    <input style={{position:"absolute", top:"679px"}}  className='mentor_name_input' type="text" placeholder="Eg: Product designer, Graphic designer" />
    <input style={{position:"absolute", top:"814px"}}  className='mentor_email_input' type="email" placeholder="Eg: Amazon,Meta" />
   
    <div style={{position:"absolute", top:"943px"}}  className='mentor2_date_input'>
      <input type="text" placeholder="Y" />
      <input type="text" placeholder="M" />
    </div> 
    
   
    <input style={{position:"absolute", top:"1079px", height:"218px"}}  className='mentor_password_input' type="text" placeholder="Write briefly about you" />
    <Link to="/mentor3"> 
    <button style={{position:"absolute", top:"1351px"}} className='mentor_next_button'>Next</button>
    </Link>
{/*///////////////////// FOOTER ////////////////////////////////////////////*/}

        <div style={{position:"absolute", top:"1578px"}} className='mentor_footer'> <Footer/></div>
    </div>
  )
}

export default Mentor2Fill