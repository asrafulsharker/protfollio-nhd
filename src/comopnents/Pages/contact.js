import emailjs from "emailjs-com";
import React from 'react';
import GoogleApiWrapper from '../../comopnents/map'
import {GoLocation} from 'react-icons/go';
import {FiPhoneCall} from 'react-icons/fi';
import {BiMailSend} from 'react-icons/bi';

const  ContactUs=()=> {

    function sendEmail(e) {
        e.preventDefault();
        // emailjs.send("service_jucs15f","template_p28xhiw");

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
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233872.72176496725!2d90.37675754794824!3d23.66661258590254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754526529067e5f%3A0xd02e4d68dbbb8c9c!2sBhaber%20Char!5e0!3m2!1sen!2sbd!4v1594913085567!5m2!1sen!2sbd" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                    
                    
            <h2 style={{borderBottom:"4px solid #2cd0f5",color:"black",width:"130px",margin:"auto auto",textAlign:"center",marginBottom:"20px"}}>Contact</h2>


            <form style={{margin:"20px"}} onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto  col-md-12 col-xd-12">
                        <div className=" col-md-12 form-group mx-auto">
                            <input style={{marginTop:"20% "}} type="text" className="form-control top-input" placeholder="Name" name="name"/>
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
                        <p>Munshiganj sadar, Munshiganj (Bangladesh)

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