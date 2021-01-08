import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import projectBanner from '../Images/project-banner.png';
import project1 from '../../comopnents/images/project1.jpg';
import project2 from '../../comopnents/images/project2.jpg';
import project3 from '../../comopnents/images/project3.jpg';
// import AiNews from '../Images/Ai-news.png';
export default class ourProject extends Component {
    render() {
        return (
           <div>
                 <h2 style={{borderBottom:"4px solid #2cd0f5",width:"120px",margin:"auto auto",marginTop:"3%",textAlign:"center"}}>Project</h2>
                <div className="container ourProject-topic">



 
               <div className="card-deck card-box">
                   
                   <div className="card ">
                   <Link to="/Github Finder">
    <img src={project1} style={{height:"210px"}} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 class="card-title" >Github Finder Using JavaScript</h5>
      <p className="card-text">The employee management system project is based on the menu-driven program for elementary database management. It employs all the basic technique of file handling in C. </p>
      
    </div>
    </Link>
  </div>
                  

  <div className="card ">
                   <Link to="/Shopping Cart using javaScript">
    <img src={project2} style={{height:"210px"}} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 class="card-title">Shopping Cart using javaScript</h5>
      <p className="card-text">Corona Virus is, unfortunately, spreading through the entire world. What can we, as developers, do to make the situation better? We can help to spread awareness by visualizing the data.</p>
    </div>
    </Link>
  </div>
  <div className="card " >
                   <Link to="/project3">
    <img src={project3} style={{height:"210px"}} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 class="card-title">AI Online News</h5>
      <p className="card-text">AI is a revolutionary speech recognition software that allows you to add voice capabilities to your applications. It allows you to control absolutely everything in the app using your voice. </p>
   
    </div>
    </Link>
  </div>
  
  </div>
  </div>
</div>

    
        

           
        )
    }
}