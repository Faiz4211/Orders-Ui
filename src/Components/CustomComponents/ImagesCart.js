import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ImagesCart() {
    const images = {
        cart: require('../../assets/images/card.jpg')
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-8 mb-3">
                        <div onClick={() => navigate('../ImageDetail')} className="img">
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
        </>
    )
}
