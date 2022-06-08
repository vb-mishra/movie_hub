import React from "react";
// import dp from "./movieps/Vbm.jpg";
import Flipcard from "./flipcard";

import { FaTwitterSquare, FaLinkedin, FaGithubSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVisualstudiocode } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

const Footer = (icons) => {
    return (
        <div className="  footer">
            <div className="contact fcard">
            <Flipcard size={50}/>
                {/* <div > <img className="dpimg" src={dp} size={10} alt="" /> </div> */}
                {/* <p className="name"> Name: Vidya Bhushan</p> */}
                {/* <p className="email"> Email: bhushanvidya275@gmail.com</p> */}
                
            </div>
            <div className="cCard fcard">
                <div className="name">Contact Links</div>
                <div className="links">
                    <div className="icons"> <a href="https://twitter.com/bhushanvidya75"><FaTwitterSquare size={70} /> </a></div>
                    <div className="icons"> <a href="https://www.linkedin.com/in/vidya-b-16abb4b0/"><FaLinkedin size={70} /></a></div>
                    <div className="icons"> <a href="https://github.com/vb-mishra"><FaGithubSquare size={70} /></a></div>
                </div>
            </div>
            <div className="description fcard">
                <div className="name">Tech Utack Used</div>
                <div className="tStack">
                    <SiVisualstudiocode size={70} />
                    <FaHtml5 size={70} />
                    <FaCss3Alt size={70} />
                    <RiReactjsLine size={70} />
                    <IoLogoJavascript size={70} />
                </div>
            </div>
            
        </div>
       

    );
}

export default Footer;




