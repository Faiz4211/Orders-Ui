import React from 'react';
import { Link } from 'react-router-dom';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsCart } from 'react-icons/bs';
import '../App.css';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
    const img = {
        KFC: require('../assets/images/KFC.png'),
        KFCcard: require('../assets/images/2.jpg')
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* SideBar  */}
            <Offcanvas style={{ backgroundColor: 'black' }} placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeVariant='white' closeButton>
                    <Offcanvas.Title className='d-inline-flex justify-content-around align-items-center text-center' style={{ color: 'white' }}>
                        <BsCart
                            className='me-2'
                            size={40}
                            color='white'
                        />
                        <h5 className='text-white'>Your Bucket</h5>
                    </Offcanvas.Title>
                    <h5 className='text-white' style={{ marginLeft: '96px' }}>RS 260</h5>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ color: 'white' }}>
                    <div className="container align-items-center" style={{
                        backgroundColor: '#1d1816',
                        margin: '8px 0',
                        padding: '16px',
                        borderRadius: '15px'
                    }}>
                        <div className="row mb-4 d-flex justify-content-between align-items-center mb-3">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                    style={{ height: '70px', width: '70px' }}
                                    src={img.KFCcard}
                                    alt="Cotton T-shirt" />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-white">Krunch Burger</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                                <button style={{ borderStyle: 'none' }} className="btn px-2">
                                    <span style={{ color: 'red', fontSize: '20px' }}>-</span>
                                </button>

                                <span style={{ height: '30px', alignSelf: 'center' }} id="form1" min="0" name="quantity" value="1" type="number"
                                    className="form-control form-control-sm text-center">2</span>

                                <button onClick={() => console.log('pressed')} style={{ borderStyle: 'none' }} className="btn px-2">
                                    <span style={{ color: 'red', fontSize: '20px' }}>+</span>
                                </button>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3 ">
                                <h6 className="mb-0">Rs 260</h6>
                            </div>
                        </div>

                    </div>
                </Offcanvas.Body>
                <button style={{
                    backgroundColor: '#fe0000', color: 'white',
                    borderRadius: '10px',
                    borderColor: 'red',
                    height: '35px',
                    marginBottom: '15px',
                    width: '95%',
                    alignSelf: 'center'
                }} type='button'>View Bucket</button>
            </Offcanvas>


            {/* Header from here  */}
            <div className="container">
                <div className="loginBar container-fluid  d-flex justify-content-around flex-wrap align-items-center">
                    <nav className="navbar-dark d-flex align-items-center flex-grow-1 ">
                        <Link to="/" className="navbar-brand d-flex">
                            <img id="nav-logo" src={img.KFC} alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
                            <span className="nav-title">Burger</span>
                            <span className="nav-title ms-3">
                                <BootstrapSwitchButton
                                    width={100}
                                    className='nav-title'
                                    checked={false}
                                    onlabel='Delivery'
                                    offlabel='Pickup'
                                    offstyle="dark"
                                    onstyle='dark'
                                    size="md" />
                            </span>
                        </Link>
                    </nav>
                    <div className="d-inline-flex m-2 logincategory">
                        <Link className='me-3'>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Select Location
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant='secondary'>
                                    <Dropdown.Item href="#/action-1">Adress</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Link>
                        <Link to=''>
                            <BsCart
                                className='me-2'
                                size={40}
                                color='white'
                                onClick={handleShow}
                            />
                        </Link>
                        <Link to='/'>
                            <button type='button' className='btn btn-dark me-2'>Login</button>
                        </Link>
                        <Link to='/'>
                            <button type='button' className='btn btn-dark me-2'>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
