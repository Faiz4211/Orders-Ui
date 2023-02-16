import React from 'react';
import Header from '../Header';
import '../../App.css';
import Footer from '../Footer';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Login() {
    const img = {
        bg: require('../../assets/images/bg.png'),
        gif: require('../../assets/images/login.gif'),
        google: require('../../assets/images/google.png')
    }

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    return (
        <>
            <Header />
            <section style={{
                paddingTop: '50px',
            }} className='Login'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div style={{
                            backgroundColor: '#1d1816',
                        }} className="col-md-4">
                            <img src={img.gif} alt="gif"
                            />
                        </div>
                        <div style={{ backgroundColor: '#1d1816', }} className="col-md-4">
                            <h1 className='text-white my-5'>Welcome!</h1>
                            <div className="container">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                                        <Form.Control value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text" placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label style={{ color: 'white' }} className='text-red'>Phone Number</Form.Label>
                                        <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="number" placeholder="Phone Number" />
                                    </Form.Group>
                                    <button style={{
                                        width: '100%',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        height: '40px',
                                        borderRadius: '10px',
                                        borderStyle: 'none',
                                        marginBottom: '20px'
                                    }}>login</button>
                                    <div className="d-flex align-items-center justify-content-around">
                                        <hr style={{ width: '100px' }} className='line d-flex ms-1 ' />
                                        <p className='text-center text-white'>Or Login With</p>
                                        <hr style={{ width: '100px' }} className='line d-flex ms-1 ' />
                                    </div>
                                </Form>
                            </div>

                            <div className="d-flex justify-content-center">
                                <img style={{
                                    height: '50px',
                                    width: '50px',
                                    marginBottom: '50px'
                                }} src={img.google} alt="google" />
                            </div>

                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}