import React from 'react'
import "./Mentor3.css"
import Navbar2 from '../Navbar/Navbar2'
import Footer from '../Footer/Footer'
import Psychologist from "./../../assets/Psychologist.png"
import { Outlet, Link } from "react-router-dom";

function Mentor3() {
  return (
    <div>
    <div>
     <Navbar2/>
    </div>
       
    <img className='mentor3_img' src={Psychologist} />

          
{/*///////////////////// HEADERS ////////////////////////////////////////////*/}

        
    <div className='mentor_head'>Great choice to help people!</div>
    <div className='mentor_subhead'>Tell us few details about you & your expertise...</div>


{/*///////////////////// PROGRESS BAR ////////////////////////////////////////////*/}


   <div className='progress'>
       <div className='one'><p>⎷</p></div>
       <div className='bar'></div>
       <div style={{backgroundColor:"#047E70", color:"#FFFFFF"}} className='two'><p>⎷</p></div>
       <div className='bar'></div>
       <div style={{backgroundColor:"#047E70", color:"#FFFFFF"}} className='three'><p>3</p></div>
   </div>


   {/*///////////////////// CREDENTIAL ////////////////////////////////////////////*/}

    <div className='mentor3_lable1'>Primary Expertise</div>
    <div className='mentor3_lable2'>Relevant disciplines</div>
    <div className='mentor3_lable3'>Tools you have experience in</div>
    <div className='mentor3_lable4'>Skills you have experience in</div>
    <div className='mentor3_lable5'>Your Target Mentees</div>

    <input className='mentor3_input1' type="text" placeholder='Eg: Design, Product design' />
    <input className='mentor3_input2' type="text" placeholder='Eg: Graphic design, Product design' />
    <input className='mentor3_input3' type="text" placeholder='Eg: Figma,React,Postman' />
    <input className='mentor3_input4' type="text" placeholder='Eg: Leadership,Communication,Empathy' />
    <input className='mentor3_input5' type="text" placeholder='Eg: No preference,Fresher' />

    <button className='mentor3_button'><h1 style={{fontSize:"20px",fontWeight:"600"}}>➕</h1>  <h1>Add Secondary Expertise</h1></button>

    <Link to="/">
    <button className='mentor3_complete'>Complete</button>
    </Link>

    <div className='mentor3_footer'>
        <Footer/>
    </div>
    </div>
  )
}

export default Mentor3