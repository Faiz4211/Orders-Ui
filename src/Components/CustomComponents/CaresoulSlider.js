import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CaresoulSlider() {
    const images = {
        firstImage: require('../../assets/images/KFC Background.jpg'),
        secondImage: require('../../assets/images/KFC 2.PNG'),
        thirdImage: require('../../assets/images/KFC 3.PNG')
    }
    return (
        <>
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

        </>
    )
}