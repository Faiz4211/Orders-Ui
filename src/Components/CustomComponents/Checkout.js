import React from 'react';
import Header from '../Header';
import { MdEdit } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { TbNumber2, TbNumber3 } from 'react-icons/tb';
import { AiOutlineWarning } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';

export default function Checkout() {
    const img = {
        KFCcard: require('../../assets/images/2.jpg'),
    }
    return (
        <>
            <Header />
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

            <div className="container">
                <div className="row" >
                    <div className="col-md-8" style={{
                        backgroundColor: '#1d1816',
                        padding: '16px',
                        borderRadius: '10px',
                        // margin: '40px 5px',
                    }}>
                        <h4 className='text-white'>Delivery Details</h4>
                        <div className="d-flex justify-content-start align-items-center">
                            <AiOutlineWarning size={30} color='yellow' />
                            <h5 className='text-white ms-2'>Complete Your Adress</h5>
                            <div style={{
                                backgroundColor: '#343434',
                                borderRadius: '10px',
                                borderColor: '#fe0000',
                                borderStyle: 'double'

                            }} className='d-flex align-items-center justify-content-between mt-2 py-3 m-2 px-3'>
                                <BsFillCircleFill className='ms-2' color='#fe0000' size={20} />
                                <p className='text-white ms-2'>Karachi Al Jannat Biryani Railway Road Defence Phase 2 Gawalmandi Lahore Punjab</p>
                                <button style={{
                                    backgroundColor: "#343434",
                                    color: 'white',
                                    borderColor: 'white',
                                    borderRadius: '5px'
                                }}>
                                    <MdEdit />
                                    <small>Add missing information</small>
                                </button>
                            </div>
                        </div>



                    </div>




                    <div className="col-md-4"
                    >
                        <div style={{
                            backgroundColor: '#1C1816',
                            padding: '24px',
                            marginBottom: '32px',
                            borderRadius: '10px',
                        }} className="inner">
                            <h4 className='text-white'>Order Summary</h4>
                            <div className='d-flex align-items-center justify-content-between py-2'>
                                <img src={img.KFCcard} style={{ width: '60px', height: '60px' }} alt="img" />
                                <p className='text-white mx-2 mt-2'>Krunch Burger <br />
                                    <span>Rs 250 x 1</span></p>
                                <p className='text-white mx-2'>Rs 250</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="row">
                    <div className="col-md-8"></div>


                    <div className="col-md-4" >
                        <div style={{
                            backgroundColor: '#1C1816',
                            padding: '24px',
                            marginBottom: '32px',
                            borderRadius: '10px'
                        }} className="inner">
                            <h5 className='text-white'>Special Instructions</h5>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}