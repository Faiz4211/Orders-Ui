import React from 'react';
import '../App.css';
import Cart from '../Components/CustomComponents/Cart';
import { useNavigate } from 'react-router-dom';
import Horizontal from './CustomComponents/Horizontal';
import ImagesCart from './CustomComponents/ImagesCart';
import CaresoulSlider from './CustomComponents/CaresoulSlider';

export default function Banner() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container py-5">
                {/* Caresoul Slider Component  */}
                <CaresoulSlider />

                {/* Horizontal Line Component  */}
                <Horizontal headingText={'Browse Categories'} />

                {/* Images Component  */}
                <ImagesCart />

                {/* Horizontal Line Component  */}
                <Horizontal headingText={'Top Selling'} />

                {/* Custom Cart Component */}
                <div className="container" onClick={() => navigate('/CardDetail')}>
                    <Cart />
                </div>
            </div>
        </>
    )
}