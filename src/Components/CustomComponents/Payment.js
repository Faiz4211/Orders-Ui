import React from 'react';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { TbNumber2, TbNumber3 } from 'react-icons/tb';
import Header from '../Header';
import { Form } from 'react-bootstrap';
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export default function Payment() {
    const img = {
        KFCcard: require('../../assets/images/2.jpg'),
        Pepsi: require('../../assets/images/Pepsi.png')
    }
    const navigate = useNavigate();
    const notify = () => {
        toast.success('Dellivery instructions saved successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            color: 'green'
        });
    }
    return (
        <>
            <Header />
            <div className="container">
                <div className="container d-flex  align-items-center justify-content-center">
                    <div className="d-flex  flex-column py-4  align-items-center justify-content-center">
                        <div style={{
                            backgroundColor: '#fe0000',
                            padding: '5px',
                            borderRadius: '20px'
                        }}>
                            <TiTick cursor='pointer' color='white' size={30} />
                        </div>
                        <h5 className='text-white text-center'>Menu</h5>
                    </div>
                    <hr style={{ width: '10%', color: '#fe0000', border: '1px solid' }} />

                    <div className="d-flex  flex-column py-4  align-items-center justify-content-center">
                        <div style={{
                            backgroundColor: '#fe0000',
                            padding: '5px',
                            borderRadius: '20px'
                        }}>
                            <TbNumber2 cursor='pointer' color='white' size={30} />
                        </div>
                        <h5 className='text-white text-center'>Bucket</h5>
                    </div>
                    <hr style={{ width: '10%', color: '#fe0000', border: '1px solid' }} />
                    <div className='d-flex flex-column p-4  align-items-center justify-content-center'>
                        <div style={{
                            backgroundColor: '#fe0000',
                            padding: '5px',
                            borderRadius: '20px'
                        }}>
                            <TbNumber3 cursor='pointer' color='white' size={30} />
                        </div>
                        <h5 className='text-white text-center' >CheckOut</h5>
                    </div>
                </div>

                <div className="row" style={{
                    backgroundColor: '#1d1816',
                    padding: '20px 10px',
                    borderRadius: '10px',
                    margin: '40px 5px',
                    maxWidth: '800px'
                }}>
                    <div className="col-md-8 d-flex flex-row justify-content-between">
                        <div className="col-md-2 ">
                            <img src={img.KFCcard} style={{ width: '60px', height: '60px' }} alt="img" />
                        </div>
                        <div className="col-md-3">
                            <span className='text-white ms-2'>Krunch Burger</span> <br />
                            <span className='text-white ms-2'>Rs 1630</span> <br />
                            <span className='text-white ms-2'><AiOutlineDelete cursor='pointer' size={20} color='#fe0000' /></span>
                            <span className='text-white ms-2'>2</span>
                            <span className='text-white ms-2'><AiOutlinePlus cursor='pointer' size={20} color='#fe0000' /></span>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <span className='text-white ms-2'>Rs 1630</span> <br />
                            <span className='me-2'><AiOutlineDelete cursor='pointer' size={20} color='#fe0000' /></span>
                            <span className='me-2'><MdEdit cursor='pointer' size={20} color='#fe0000' /></span>
                        </div>
                    </div>
                </div>

                <div className="container d-flex justify-content-end mb-200">
                    <div className="col-md-4 text-center" style={{
                        backgroundColor: '#1d1816',
                        padding: '30px', borderRadius: '10px'
                    }}>
                        <div className=' py-3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='text-white'>Special Instructions (Optional)</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className="form-check d-flex justify-content-between">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-white" for="flexCheckDefault">
                                    Save for future
                                </label>
                                <span className='text-white'>0/200</span>
                            </div>
                            <button onClick={notify} style={{
                                backgroundColor: '#1d1816',
                                borderColor: 'white',
                                borderRadius: '10px',
                                width: '80%',
                                height: '50px',
                                marginTop: '40px',
                                color: 'white'

                            }}>Done</button>
                            <ToastContainer />
                            <button onClick={() => navigate('/Checkout')} style={{
                                width: '80%',
                                height: '50px',
                                marginTop: '40px',
                                color: 'white',
                                backgroundColor: '#fe0000',
                                borderStyle: 'none',
                                borderRadius: '10px'

                            }}>Proceed to Checkout</button>
                        </div>
                        <div className='d-flex  justify-content-between py-3'>
                            <span className='text-white'>SubTotal</span>
                            <span className='text-white'>Rs 3620</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
                <Footer />
            </div>
        </>
    )
}
