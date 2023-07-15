import React from 'react'
import "./Home.css"
import blue_rocket from "./../../assets/blue_rocket.png"
import girl from "./../../assets/girl.png"
import { Outlet, Link } from "react-router-dom";
import amazon from "./../../assets/amazon.png"
import spotify from "./../../assets/spotify.png"
import meta from "./../../assets/meta.png"

import desing from "./../../assets/UI:UX Desing.png"
import manage from "./../../assets/manage.png"
import marketing from "./../../assets/marketing.png"
import data from "./../../assets/data science.png"
import teaching from "./../../assets/teaching.png"

import Union from "./../../assets/Union.png"

import Ellipse1 from "./../../assets/Ellipse1.png"
import Ellipse2 from "./../../assets/Ellipse2.png"
import Ellipse3 from "./../../assets/Ellipse3.png"

import Navbar from "./../Navbar/Navbar"
import Footer from "./../Footer/Footer"
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>


{/*///////////////// LANDING SECTION /////////////////////////////////////*/}


        <div className='landing'>  </div>
        
            <img className='rocket' src={blue_rocket} />
            <img className='girl' src={girl} />

            <div className='landing_heading'>Grow Faster Together</div>

            <div className='landing_subheading'>Find a mentor or Lead the path for someone
            It’s a win win!</div>

            <button className='find_mentor'>Find a Mentor</button>
            <Link to="/mentor">
            <button className='become_mentor'>Become a Mentor</button>
            </Link>
     

{/*///////////////// CAREER SECTION /////////////////////////////////////*/}


        <div className='career'></div>
        
        <h2 className='career_head1'>Find the expertises from</h2>

        <div className='career_frame1'>
            <img className='amazon' src={amazon} />
            <img className='spotify' src={spotify} />
            <img className='meta' src={meta} />
            
        </div>

        <h2 className='career_head2'>Make your career growth in</h2>

        
        <div className='frame2'>
        <p className='design_p' >UI/UX Design</p>
        <p className='management_p' >Product Management</p>
        <p className='marketing_p' >Marketing</p>
        <p className='data_p' >Data Science</p>
        <p className='teaching_p' >Teaching</p>
            <img className='design' src={desing} />
            <img className='management' src={manage} />
            <img className='marketing' src={marketing} />
            <img className='data' src={data} />
            <img className='teaching' src={teaching} />
        </div>


{/*///////////////// ABOUT SECTION /////////////////////////////////////*/}


        <div className='about_head'>What our Clients says about about us</div>
        <div className='about_vector1'>⌵</div>
        <div className='about_vector2'>⌵</div>
        <img className='union1' src={Union} />
        <img className='union2' src={Union} />
        <img className='union3' src={Union} />

        <img className='Ellipse1' src={Ellipse1} />
        <img className='Ellipse2' src={Ellipse2} />
        <img className='Ellipse3' src={Ellipse3} />

        <p className='lorem1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
        <p className='lorem2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
        <p className='lorem3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

        <h2 className='about_name1'>Alisa</h2>
        <h2 className='about_name2'>Michel</h2>
        <h2 className='about_name3'>Lee Cooper</h2>

        <h2 className='post1'>Founder,XOXO</h2>
        <h2 className='post2'>Manager,QWERTY</h2>
        <h2 className='post3'>HR Director, Meta</h2>

{/*///////////////// DOUBT SECTION /////////////////////////////////////*/}


        <div className='doubt'></div>
            <h1 className='doubt_h1'>Lets clear your Doubts!</h1>
            <div className='doubts1'><h1>What is the approval criteria to be a Mentor? </h1><h2>+</h2></div>
            <div className='doubts2'><h1>How does Mentor Bridge work for Mentor?</h1> <h2>+</h2></div>
            <div className='doubts3'><h1>Can I charge fees of my choice?     </h1><h2>+</h2></div>
            <div className='doubts4'><h1>Can I get guidance on how to be a mentor?</h1><h2>+</h2></div>


{/*///////////////// FOOTER SECTION /////////////////////////////////////*/}

<div className='Footer'>
    <Footer />
</div>
       
    <Outlet/>
    </div>
  )
}

export default Home