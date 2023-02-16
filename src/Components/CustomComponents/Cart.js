import React from 'react';
import { Card } from 'react-bootstrap';

export default function Cart() {
    const images = {
        card1: require('../../assets/images/2.jpg')
    }
    return (
        <>
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
        </>
    )
}
