import React, { useState } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsCart } from 'react-icons/bs';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import '../App.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
    const img = {
        logo: require('../assets/images/BurgerLogo.png'),
        KFCcard: require('../assets/images/2.jpg'),
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    return (
        <>
            {/* SideBar */}
            <Offcanvas style={{ backgroundColor: 'black' }} placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeVariant='white' closeButton>
                    <Offcanvas.Title className='d-inline-flex justify-content-around align-items-center text-center' style={{ color: 'white' }}>
                        <BsCart
                            className='me-2'
                            size={40}
                            color='#fe0000'
                        />
                        <h5 className='text-white'>Your Bucket</h5>
                    </Offcanvas.Title>
                    <h5 className='text-white' style={{ marginLeft: '96px' }}>RS 260</h5>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ color: 'white' }}>
                    <div className="row" style={{
                        backgroundColor: '#1d1816',
                        padding: '20px 10px',
                        borderRadius: '10px',
                        margin: '5px'
                    }}>
                        <div className="col-3">
                            <img src={img.KFCcard} style={{ width: '60px', height: '60px' }} alt="img" />
                        </div>
                        <div className="col-6 ">
                            <span className='me-2'>Krunch Burger</span> <br />
                            <span className='me-2'><AiOutlineDelete size={20} color='#fe0000' /></span>
                            <span className='me-2'>2</span>
                            <span className='me-2'><AiOutlinePlus size={20} color='#fe0000' /></span>
                        </div>
                        <div className="col-3">
                            <span>Rs 260</span>
                        </div>
                    </div>

                </Offcanvas.Body>
                <button style={{
                    backgroundColor: '#fe0000', color: 'white',
                    borderRadius: '10px',
                    borderColor: '#fe0000',
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
                            {/* <form className="d-flex">
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
                                        color='#fe0000'
                                        onClick={handleShow}
                                    />
                                </Link>
                                <button onClick={() => navigate('/Login')} style={{ backgroundColor: '#fe0000', color: 'white' }} type='button' className='btn  me-2'>Login/ <span>Register</span></button>
                            </form> */}
                        </div>

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
                                    color='#fe0000'
                                    onClick={handleShow}
                                />
                            </Link>
                            <button onClick={() => navigate('/Login')} style={{ backgroundColor: '#fe0000', color: 'white' }} type='button' className='btn  me-2'>Login/ <span>Register</span></button>
                            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        </form>
                    </div>
                </nav>

            </div>

        </>
    )
}