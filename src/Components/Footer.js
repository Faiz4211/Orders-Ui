import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Footer() {
    const img = {
        logo: require('../assets/images/KFC.png'),
        appStore: require('../assets/images/app-store.png'),
        googleStore: require('../assets/images/google-store.png'),
        Facebook: require('../assets/images/facebook.png'),
        Instagram: require('../assets/images/instagram.png'),
        Youtube: require('../assets/images/youtube.png')
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
                        <h6 className='text-start'>Find us on</h6>
                        <span><img className='me-3' style={{ height: '40px', width: '40px' }} src={img.Youtube} alt='img' /> <span></span></span>
                        <span><img className='me-3' style={{ height: '40px', width: '40px' }} src={img.Instagram} alt='img' /> <span></span></span>
                        <span><img className='me-3' style={{ height: '40px', width: '40px' }} src={img.Facebook} alt='img' /> <span></span></span>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="widget col-md-3">
                            <div>
                                <h4>Information</h4>
                                <ul>
                                    <li><Link to="/">About Us</Link></li>
                                    <li><Link to="/">Mithao Book</Link></li>
                                    <li><Link to="/">Mithao Book - Scholarships</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Careers</Link></li>
                                </ul>

                            </div>
                        </div>
                        <div className="widget col-md-3">
                            <div>
                                <h4>Location</h4>
                                <ul>
                                    <li><Link to="/">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget col-md-3 md-flex justify-content-end">
                            <div>
                                <h4>Get in Touch</h4>
                                <ul>
                                    <li><Link to='/'>Terms & Conditions</Link></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-3 md-flex">
                            <div className="links">
                                <img src={img.appStore} alt="img" />
                                <div className="col-md-3 ml-md-auto py-3">
                                    <img src={img.googleStore} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
