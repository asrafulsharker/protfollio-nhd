import React from 'react'
import {FaFacebookF,FaGithub,FaInstagram,FaLinkedinIn } from 'react-icons/fa';

function footer() {
    return (
        <div className="footer-container">
            <div className="container">
              <div className="row">
                  <div className="col-md-4 footer-box">
                      <h3 className="footer-h3">About Me</h3>
                      <br/>
                      <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                    <p>Copyright ©2021 All rights reserved |  by @nahid.com</p>
                  </div>
                  <div className="col-md-4 footer-box">
                      <h3  className="footer-h3">Contact Me</h3>
                      <br/>
                      <p>Stay updated with my latest trends</p>
                    <form>
                        <input type="email" name="email" placeholder="Enter email address"/>
                    </form>
                  </div>
                  <div className="col-md-4 footer-box">
                      <h3  className="footer-h3">Follow Me </h3>
                      <br/>
                      <p>Let us be social</p>
    <a href="#"><FaFacebookF style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}} className="nav-icon icon"/> </a>
    <a href="#"><FaInstagram style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}} className="nav-icon icon"/> </a>
    <a href="#"><FaGithub style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}} className="nav-icon icon"/> </a>
    <a href="#"><FaLinkedinIn style={{color:"white",marginLeft:"10px",fontSize:"30px",background:"#0477b5",border:"1px solid black",borderRadius:"30%"}} className="nav-icon icon"/> </a>
                  </div>
                  
              </div>
            </div>
        </div>
    )
}

export default footer;