import React from 'react';
import Button from '../CustomComponents/Button';
import Header from '../Header';
import Footer from '../Footer'

export default function CardDetail() {
    const img = {
        Burger: require('../../assets/images/burger.png'),
        KFCcard: require('../../assets/images/2.jpg'),
        Pepsi: require('../../assets/images/Pepsi.png')
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
                    <div className="col-md-4">
                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <h4 className='heading'>Add On</h4>
                            <button style={{
                                backgroundColor: '#000e08',
                                color: '#009748',
                                padding: '6px 12px',
                                borderRadius: '50px',
                                marginBottom: '10px',
                                marginTop: '10px'
                            }} className='ms-3'>optional</button>
                        </div>

                        <div style={{ backgroundColor: '#1d1816', borderRadius: '10px', borderColor: 'white', border: '1px solid white' }} className="container py-3">
                            <div className="row p-2">
                                <div className="col-4">
                                    <img style={{ width: '50px', height: '50px' }} src={img.Burger} alt="img" />
                                </div>
                                <div className="col-4 text-white">
                                    <p className='text-white'>ColesLaw <br /> <span>Rs 80</span></p>
                                </div>

                                <div className="col-4">
                                    <span style={{ color: 'red', cursor: 'pointer' }}>+ Add</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Second column  */}
                    <div className="col-md-4">
                        <div className="d-flex justify-content-around align-items-center">
                            <h4 className='heading'>Add a Soft Drink</h4>
                            <button style={{
                                backgroundColor: '#000e08',
                                color: '#009748',
                                padding: '6px 12px',
                                borderRadius: '50px',
                                marginBottom: '10px',
                                marginTop: '10px'
                            }} className='ms-3'>optional</button>
                        </div>

                        <div style={{ backgroundColor: '#1d1816', borderRadius: '10px', borderColor: 'white', border: '1px solid white' }} className="container py-3">
                            <div className="row p-2">
                                <div className="col-4">
                                    <img style={{ width: '50px', height: '50px' }} src={img.Pepsi} alt="img" />
                                </div>
                                <div className="col-4 text-white">
                                    <p className='text-white'>Regular Pepsi<br /><span>Rs 100</span></p>
                                </div>

                                <div className="col-4">
                                    <span style={{ color: 'red', cursor: 'pointer' }}>+ Add</span>
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
