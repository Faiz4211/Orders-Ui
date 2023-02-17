import React from 'react';
import Header from '../Header';
import '../../App.css';
import Footer from '../Footer';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const img = {
        bg: require('../../assets/images/bg.png'),
        gif: require('../../assets/images/login.gif'),
        google: require('../../assets/images/google.png')
    }
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const handlSubmit = (e) => {
        e.preventDefault();
        if (name === "" || phoneNumber === "") {
            toast.error('Please Enter Required Fields', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored"
            });
        }
        else {
            setName("")
            setPhoneNumber("")
        }
    }

    return (
        <>
            <Header />
            <div className="login pt-5">
                <div style={{ backgroundColor: '#1d1816', marginTop: '50px', marginBottom: '70px', maxWidth: '900px' }} className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6 align-self-center">
                            <img style={{
                                maxWidth: '100%'
                            }} src={img.gif} alt="gif"
                            />
                        </div>
                        <div className="col-md-4">
                            <h1 className='text-white py-4 mt-3'>Welcome!</h1>
                            <div className="container">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                                        <Form.Control value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text" placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-5" controlId="formBasicPassword">
                                        <Form.Label style={{ color: 'white' }} className='text-red'>Phone Number</Form.Label>
                                        <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="number" placeholder="Phone Number" />
                                    </Form.Group>
                                    <button type='button' onClick={handlSubmit} style={{
                                        width: '100%',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        height: '40px',
                                        borderRadius: '10px',
                                        borderStyle: 'none',
                                        marginBottom: '20px'
                                    }}>login</button>
                                    <ToastContainer />
                                    <div className="d-flex align-items-center justify-content-around">
                                        <hr style={{ width: '100px' }} className='line d-flex ms-1 ' />
                                        <p className='text-center text-white'>Or Login With</p>
                                        <hr style={{ width: '100px' }} className='line d-flex ms-1 ' />
                                    </div>
                                </Form>
                            </div>
                            <div className="d-flex justify-content-center py-3">
                                <img style={{
                                    height: '40px',
                                    width: '40px',
                                    marginBottom: '50px',
                                }} src={img.google} alt="google" />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}