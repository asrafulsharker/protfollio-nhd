import emailjs from "emailjs-com";
import React from 'react';
import {GoLocation} from 'react-icons/go';
import {FiPhoneCall} from 'react-icons/fi';
import {BiMailSend} from 'react-icons/bi';

const  ContactUs=()=> {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_jucs15f', 'template_p28xhiw', e.target, 'user_AN2wXrQ8kGDKkPCJCRzOQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className="contact">
        <div className="container">
            <div >
                    
            <h2 style={{borderBottom:"4px solid #2cd0f5",color:"black",width:"130px",margin:"auto auto",textAlign:"center",marginBottom:"20px"}}>Contact</h2>


            <form style={{margin:"20px"}} onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto  col-md-12 col-xd-12">
                        <div className=" col-md-12 form-group mx-auto">
                            <input style={{marginTop:"0% "}} type="text" className="form-control top-input" placeholder="Name" name="name"/>
                        </div>
                        <div className=" col-md-12 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className=" col-md-12 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className=" col-md-12 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className=" col-md-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row"  style={{marginLeft:"6%",paddingBottom:"30%",marginTop:"5%" }}>
            <div className="col-md-4">
                <div className="row">
                    <div className="">
                       <GoLocation style={{fontSize:"40px" ,padding:"5%" ,color:"rgb(96, 156, 206)"}}/>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <p>Munshiganj sadar, Munshiganj 

</p>
                    </div>
                </div>
                </div>


<div className="col-md-4">
                <div className="row">
                    <div className="">
                       <FiPhoneCall style={{fontSize:"40px" ,padding:"5%" ,color:"rgb(96, 156, 206)"}}/>
                    </div>
                    <div>
                        <h4>Call Me</h4>
                        <p>+880 1910125428
                        </p>
                    </div>
                </div>
                </div>

                <div className="col-md-4">

                <div className="row">
                    <div className="">
                       <BiMailSend style={{fontSize:"40px",padding:"5%",color:"rgb(96, 156, 206)"}}/>
                    </div>
                    <div>
                        <h4>Enquires</h4>
                        <p>nahidjc80@gmail.com

</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactUs;