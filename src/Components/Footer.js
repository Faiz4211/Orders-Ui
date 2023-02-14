import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Footer() {
    const img = {
        logo: require('../assets/images/KFC.png')
    }
    return (
        <>
            <div className="footer-siderbar">
                <div className="container text-center d-flex justify-content-center">
                    <div className="logo">
                        <img src={img.logo} alt="" />
                    </div>
                    <div className='v1 flex-lg-column ms-4 justify-content-center '></div>
                    <div className="logo">
                        <h6>Find us on</h6>
                        <span>Youtube <span></span></span>
                        <span>Instagram <span></span></span>
                        <span>Facebook <span></span></span>
                    </div>
                </div>


                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h4>Information</h4>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Mithao Book</Link></li>
                                <li><Link to="/">Mithao Book - Scholarships</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Careers</Link></li>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h4>Location</h4>
                                <ul className='latest-news'>
                                    <li><Link to="/">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 md-flex justify-content-end">
                            <div className="adress">
                                <h4>Get in Touch</h4>
                                <address>
                                    <p>Terms & Conditions</p>
                                </address>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* 
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">Copyright@ abc.com</div>
                        <div className="col-md-6 d-md-flex justify-content-end">
                            <ul id='social-icons'>
                                <li><Link to="/"><AiFillTwitterSquare /></Link></li>
                                <li><Link to="/"> <AiFillFacebook /></Link></li>
                                <li><Link to="/"><AiFillLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
