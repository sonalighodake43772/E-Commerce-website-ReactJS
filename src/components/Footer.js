import React from "react";
// import { Link } from "react-router-dom";
// import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            
            
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">

                        <div className="col-12">
                        
                            <div className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
                               
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
