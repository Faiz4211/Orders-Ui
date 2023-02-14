import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import Card from 'react-bootstrap/Card';

export default function Banner(props) {
    const images = {
        firstImage: require('../assets/images/KFC Background.jpg'),
        secondImage: require('../assets/images/KFC 2.PNG'),
        thirdImage: require('../assets/images/KFC 3.PNG'),
        cart: require('../assets/images/card.jpg'),
        card1: require('../assets/images/2.jpg')
    }
    return (

        <>
            <div className="container py-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.firstImage}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.secondImage}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.thirdImage}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div className="container d-flex justify-content-start align-items-center  py-5">
                    <h2 className='heading'>Browse Categories</h2>
                    <hr className='line d-flex ms-4 ' />
                </div>

                <div className="container d-flex justify-content-center">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-md-8">
                            <div className="img">
                                <img src={images.cart} alt="myImg" />
                                <img src={images.cart} alt="myImg" />
                                <img src={images.cart} alt="myImg" />
                                <img src={images.cart} alt="myImg" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="img">
                                <img src={images.cart} alt="myImg" />
                                <img src={images.cart} alt="myImg" />
                                <img src={images.cart} alt="myImg" />
                                <img src={images.cart} alt="myImg" />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="container d-flex justify-content-start align-items-center  py-5">
                    <h2 className='heading'>Top Selling</h2>
                    <hr className='line d-flex ms-4 ' />
                </div>


                {/* Custom Card  */}
                <div className="container">
                    <div className="row d-md-flex justify-content-around align-items-center ">
                        {/* 1 */}
                        <Card className='col-md-4 mb-3' style={{ width: '18rem', backgroundColor: '#1d1816' }}>
                            <Card.Img variant="top" src={images.card1} />
                            <Card.Body>
                                <Card.Title style={{ color: 'white' }} >Krunch Burger Burger</Card.Title>
                                <Card.Text style={{ color: 'white' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, unde aperiam?
                                </Card.Text>
                                <div className="d-flex justify-content-between py-2">
                                    <h3 className='align-items-center ' style={{ color: 'white' }}>RS 250</h3>
                                    <button style={{
                                        backgroundColor: '#fe0000', color: 'white',
                                        borderRadius: '10px',
                                        borderColor: 'red',
                                        height: '35px'
                                    }} type="button"><small>Add to Bucket</small></button>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* 2 */}
                        <Card className='col-md-4 mb-3' style={{ width: '18rem', backgroundColor: '#1d1816' }}>
                            <Card.Img variant="top" src={images.card1} />
                            <Card.Body>
                                <Card.Title style={{ color: 'white' }} >Midnight Deal 3</Card.Title>
                                <Card.Text style={{ color: 'white' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius harum!
                                </Card.Text>
                                <div className="d-flex justify-content-between py-2">
                                    <h3 className='align-items-center ' style={{ color: 'white' }}>RS 640</h3>
                                    <button style={{
                                        backgroundColor: '#fe0000', color: 'white',
                                        borderRadius: '10px',
                                        borderColor: 'red',
                                        height: '35px'
                                    }} type="button"><small>Add to Bucket</small></button>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* 3 */}
                        <Card className='col-md-4 mb-3' style={{ width: '18rem', backgroundColor: '#1d1816' }}>
                            <Card.Img variant="top" src={images.card1} />
                            <Card.Body>
                                <Card.Title style={{ color: 'white' }} >Krunch fries N Drink</Card.Title>
                                <Card.Text style={{ color: 'white' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, perspiciatis similique!
                                </Card.Text>
                                <div className="d-flex justify-content-between py-2">
                                    <h3 className='align-items-center ' style={{ color: 'white' }}>RS 450</h3>
                                    <button style={{
                                        backgroundColor: '#fe0000', color: 'white',
                                        borderRadius: '10px',
                                        borderColor: 'red',
                                        height: '35px'
                                    }} type="button"><small>Add to Bucket</small></button>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* 4 */}
                        <Card className='col-md-4 mb-3' style={{ width: '18rem', backgroundColor: '#1d1816' }}>
                            <Card.Img variant="top" src={images.card1} />
                            <Card.Body>
                                <Card.Title style={{ color: 'white' }} >Xtreme Duo Box</Card.Title>
                                <Card.Text style={{ color: 'white' }}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, odio porro!
                                </Card.Text>
                                <div className="d-flex justify-content-between py-2">
                                    <h3 className='align-items-center ' style={{ color: 'white' }}>RS 1350</h3>
                                    <button style={{
                                        backgroundColor: '#fe0000', color: 'white',
                                        borderRadius: '10px',
                                        borderColor: 'red',
                                        height: '35px'
                                    }} type="button"><small>Add to Bucket</small></button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}