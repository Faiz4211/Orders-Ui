import React from 'react';
import '../../App.css';

export default function Horizontal({ headingText }) {
    return (
        <>

            <div className="container d-flex justify-content-start align-items-center  py-5">
                <h2 className='heading'>{headingText}</h2>
                <hr className='line d-flex ms-4 ' />
            </div>
        </>
    )
}
