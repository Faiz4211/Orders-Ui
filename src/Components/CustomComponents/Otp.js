import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import '../../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Otp() {
    const img = {
        bg: require('../../assets/images/bg.png'),
        gif: require('../../assets/images/login.gif'),
    }

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [num3, setNum3] = useState();
    const [num4, setNum4] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!num1 || !num2 || !num3 || !num4) {
            toast.error('Enter Required Fields', {
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
            setNum1('')
            setNum2('')
            setNum3('')
            setNum4('')
            navigate('/')
        }
    }

    return (
        <>
            <Header />

            <div className="login pt-5">
                <div style={{ backgroundColor: '#1d1816', marginTop: '50px', marginBottom: '70px', maxWidth: '900px', padding: '20px' }} className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6 align-self-center">
                            <img style={{
                                maxWidth: '100%'
                            }} src={img.gif} alt="gif"
                            />
                        </div>
                        <div className="col-md-4">
                            <h1 className='text-white py-4 mt-3'>Otp Verification!</h1>
                            <div className="container">
                                <p className='text-white'>Please enter the OTP sent to your mobile number +92317244768 <span onClick={() => navigate('/Login')} style={{
                                    color: 'red',
                                    cursor: 'pointer'
                                }}>change</span></p>
                                <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                                    <input value={num1} onChange={(e) => setNum1(e.target.value)} class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                                    <input value={num2} onChange={(e) => setNum2(e.target.value)} class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                                    <input value={num3} onChange={(e) => setNum3(e.target.value)} class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                                    <input value={num4} onChange={(e) => setNum4(e.target.value)} class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                                </div>
                                <p className='text-white pt-4'>Didn't receive OTP?<span className='ms-2' style={{
                                    color: 'red',
                                    cursor: 'pointer'
                                }}>Resend Now</span></p>

                                <button onClick={handleSubmit} type='button' style={{
                                    width: '100%',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    height: '40px',
                                    borderRadius: '10px',
                                    borderStyle: 'none',
                                    marginBottom: '20px'
                                }}>Verify</button>
                                <ToastContainer />
                                <button type='button' style={{
                                    width: '100%',
                                    backgroundColor: '#1d1816',
                                    color: 'white',
                                    height: '40px',
                                    borderRadius: '10px',
                                    borderColor: 'white',
                                    marginBottom: '20px'
                                }}>Send OTP to Email</button>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                </div>

                <div className='pt-5'>
                    <Footer />
                </div>
            </div>


        </>
    )
}
