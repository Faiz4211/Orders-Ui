import React, { useState } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsCart } from 'react-icons/bs';
import '../App.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
    const img = {
        logo: require('../assets/images/BurgerLogo.png'),
        KFCcard: require('../assets/images/2.jpg')
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* SideBar */}
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

            {/* nav  */}
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <img src={img.logo} alt='img' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className=" nav-link active" aria-current="page" to={'/'}>Burger</Link>
                                </li>
                                <li className="nav-item">
                                    <BootstrapSwitchButton
                                        width={80}
                                        className='nav-title'
                                        checked={false}
                                        onlabel='Delivery'
                                        offlabel='Pickup'
                                        offstyle="dark"
                                        onstyle='dark'
                                        size="md" />

                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link className='me-3'>
                                    <Dropdown size={20}>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            Location
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item style={{ color: 'black' }} href="#/action-1">Adress</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Link>

                                <Link to=''>
                                    <BsCart
                                        className='me-3'
                                        size={30}
                                        color='white'
                                        onClick={handleShow}
                                    />
                                </Link>
                                <Link to='/'>
                                    <button type='button' className='btn btn-dark me-2'>Login/ <span>Register</span></button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}