import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../App.css';
import Button from '../CustomComponents/Button';
import Horizontal from '../CustomComponents/Horizontal';
import Cart from '../CustomComponents/Cart';


export default function ImageDetail() {
    return (
        <>
            <Header />
            <div className="container text-center py-5">
                <Button />
                <Horizontal headingText={'Everyday Value'} />
                <div className='container mb-5'>
                    <Cart />
                </div>
            </div>
            <Footer />
        </>
    )
}