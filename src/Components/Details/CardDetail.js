import React from 'react';
import Button from '../CustomComponents/Button';
import Header from '../Header';
import Footer from '../Footer'

export default function CardDetail() {
    const img = {
        Burger: require('../../assets/images/burger.png'),
        KFCcard: require('../../assets/images/2.jpg')
    }
    return (
        <>
            <Header />
            <div className="container text-center py-5">
                <Button />

                {/* CartDetail from here  */}
                <div className="container" style={{
                    backgroundImage: `url("https://www.kfcpakistan.com/assets/images/bg-ellipse.png")`,
                    paddingTop: '24px',
                    marginBottom: '80px',
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '12%',
                    marginTop: '20px'

                }}>
                    <div className="row py-3" >
                        <div className="col-md-6">
                            <img style={{
                                width: '100%',
                                maxWidth: '391px'
                            }} src={img.Burger} alt="img" />
                        </div>
                        <div className="col-sm-6">
                            <h3 className='text-start mt-auto' style={{ color: 'white', }}>Krunch Burger</h3>
                            <h5 className='text-start py-2' style={{ color: 'white', }}>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</h5>
                            <h5 className='text-start py-2' style={{ color: 'white', }}>RS 250</h5>
                            <div className="d-flex">
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                                    <button style={{
                                        height: '50px',
                                        minWidth: '50px',
                                        backgroundColor: '#E4002B',
                                        color: 'white',
                                        fontSize: '1rem'
                                    }} className="btn px-2">
                                        -
                                    </button>

                                    <span style={{
                                        height: '50px',
                                        minWidth: '50px',
                                        fontSize: '30px',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        color: 'white',
                                        justifyContent: 'center',
                                    }}>3</span>

                                    <button style={{
                                        height: '50px',
                                        minWidth: '50px',
                                        backgroundColor: '#E4002B',
                                        color: 'white'
                                    }} className="btn px-2">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional Section from here  */}
                <div className="row">
                    {/* First  Column  */}
                    <div className="col-md-3">
                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <h4 className='heading'>Add On</h4>
                            <button style={{
                                backgroundColor: '#000e08',
                                color: '#009748',
                                padding: '6px 12px',
                                borderRadius: '50px'
                            }} className='ms-3'>optional</button>
                        </div>
                        <div className="inner">
                            <div className="container align-items-center" style={{
                                backgroundColor: '#1d1816',
                                margin: '8px 0',
                                padding: '16px',
                                borderRadius: '15px'
                            }}>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2 ">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4 ">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2 ">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second column  */}
                    <div className="col-md-3">
                        <div className="d-flex justify-content-around align-items-center">
                            <h4 className='heading'>Add a Soft Drink</h4>
                            <button style={{
                                backgroundColor: '#000e08',
                                color: '#009748',
                                padding: '6px 12px',
                                borderRadius: '50px'
                            }} className='ms-3'>optional</button>
                        </div>
                        <div className="inner">
                            <div className="container align-items-center" style={{
                                backgroundColor: '#1d1816',
                                margin: '8px 0',
                                padding: '16px',
                                borderRadius: '15px'
                            }}>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                                    <div className="col-md-2">
                                        <img
                                            style={{ height: '70px', width: '70px' }}
                                            src={img.KFCcard}
                                            alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="ms-3 text-white text-center">Krunch Burger</h6>
                                        <h6 className="ms-3 text-white text-center">Rs 260</h6>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <button
                                            style={{
                                                color: 'red',
                                                backgroundColor: '#1d1816',
                                                borderStyle: 'none'
                                            }}
                                        >+ Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer from here  */}
            <Footer />
        </>
    )
}
