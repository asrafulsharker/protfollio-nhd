import React from 'react';
import ResumeImg from '../../comopnents/images/resume-img.jpg';
import { motion } from "framer-motion"
function resumeHome() {
    return (
        <div className="resume-top">
             <h2 style={{borderBottom:"4px solid #2cd0f5",color:"black",width:"160px",margin:"auto auto",textAlign:"center",marginBottom:"20px"}}>About me</h2>
            <div className="container">
                {/* <div className="row">
                    <div className="col-md-6">
                        <img style={{width:"65%",margin:"20%",border:"5px solid #c7c5c1",borderRadius:"1%"}} src={ResumeImg} alt="resume img"/>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div> */}




<div className="row">
            <div className="col-md-6 ">
            <motion.div
           animate={{ scale: 0.8 }}
           transition={{ duration: 1 }}
            >
               
                    <img className="resume-cover" style={{height:"400px", marginTop:"15%",border:"5px solid #95e9f0",borderRadius:"1%"}} src={ResumeImg}/>
                
         </motion.div>
         </div>

              

                <div className="col-md-6 text-animation"  style={{height:"400px", marginTop:"15%"}}>


                   <h5><strong>Name :</strong> Md. Nahid</h5>
                   <h5><strong>Address :</strong> Chitalia,Munshiganj sadar, 1500 Munshiganj (Bangladesh)</h5>
                   <h5><strong>Phone :</strong> +880 1910125428</h5>
                   <h5><strong>Date of birth :</strong> 06/06/1999</h5>
                   <h5><strong>Email :</strong> nahidjc80@gmail.com</h5>
                   <h5><strong>Nationality :</strong> Bangladeshi</h5>

                </div>
            </div>



            </div>
        </div>
    )
}

export default resumeHome;
