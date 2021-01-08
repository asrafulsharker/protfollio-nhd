import React from 'react'
import {FaFacebookF,FaInstagram,FaGithub,FaLinkedinIn} from 'react-icons/fa'
import Resume from './resume';
import Contact from './contact';
import Protfollio from './galary';
import Hero1 from '../images/hero1.png';
import {Button} from '@material-ui/core';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Typical from 'react-typical';

function home() {

    return (
        
        <div style={{padding:"10%",background: "rgb(191,222,230)",
        background: "linear-gradient(90deg, rgba(219,244,251,1) 0%, rgba(238,255,255,1) 50%, rgba(227,253,255,1) 100%)"}}>
            <div className="container">
      <div className="row">
      <div className="col-md-8">
          <p>Hi There I am</p>
                <h1>Nahid Hasan</h1>
                <h2>&</h2>
                <Typical
                    steps={['I am', 1000, 'Developer!', 1000,'Engineer!', 1000,'Cricketer!', 1000]}
                    loop={Infinity}
                    wrapper="h3"
                />
                <p>I was born in 28 july 1999.My Mother is a housewife and father was Overseas.My home town Munshiganj.I have been living my way since childhood.I have Two little sister.</p>
                <p>I wish i could be a great software engineer.Once Upon a time i wanted to be a Cricketer.Unfortunately i didn't be a Professional Cricketer.Basically I'm a bowling all-rounder.I have played in many large hall Tournament.And i love to play Cricket.</p>
                <a href="https://drive.google.com/file/d/1WvrGrgOV3J5ViFoyFhaRtixxhNR_CsZC/view?fbclid=IwAR0jHJdDghm5q_rVaxX9z4-WCF1FDnXoQwP-zarqUhUogypIStK61YPblHc" ><Button size="large" variant="contained" color="primary">
                    Download Resume <AssignmentReturnedIcon/>
                    </Button></a>
                <div className="row" style={{paddingTop:"5%",paddingBottom:"5%"}}>
                    <a href="#"><FaFacebookF style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}} className="nav-icon icon"/></a>
                    <a href="#"> <FaInstagram style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}} className="nav-icon icon"/></a>
                    <a href="#"><FaGithub style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}} className="nav-icon icon"/></a>
                    <a href="#"><FaLinkedinIn style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}} className="nav-icon icon"/></a>
                </div>
            </div>
            <div className="col-md-4">
            <div className="extra-animation">
                <img src={Hero1} className="img_cover"  style={{border:"3px solid #0caab0",borderRadius:"50%",width:"99%",paddingTop:"2%"}}/>
            </div>
            </div>
      </div>
            </div>
          
            <Resume/>
            <Protfollio/>
            <Contact/>
        </div>
    )
}

export default home
