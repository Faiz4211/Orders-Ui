import React from 'react';
import '../../App.css';

export default function Button() {
    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <button style={{
                        backgroundColor: 'red',
                        color: 'white',
                        height: '44px',
                        width: '90%',
                        borderRadius: '8px',
                        marginBottom: '5px'
                    }} >EveryDay Value</button>
                </div>
                <div className="col-md-2">
                    <button style={{
                        backgroundColor: 'red',
                        color: 'white',
                        height: '44px',
                        width: '90%',
                        borderRadius: '8px',
                        marginBottom: '5px'
                    }} >Ala Cart & Combos</button>
                </div>
                <div className="col-md-2">
                    <button style={{
                        backgroundColor: 'red',
                        color: 'white',
                        height: '44px',
                        width: '90%',
                        borderRadius: '8px',
                        marginBottom: '5px'
                    }} >Signature Boxes</button>
                </div>
                <div className="col-md-2">
                    <button style={{
                        backgroundColor: 'red',
                        color: 'white',
                        height: '44px',
                        width: '90%',
                        borderRadius: '8px',
                        marginBottom: '5px'
                    }} >Sharing</button>
                </div>
                <div className="col-md-2">
                    <button style={{
                        backgroundColor: 'red',
                        color: 'white',
                        height: '44px',
                        width: '90%',
                        borderRadius: '8px',
                        marginBottom: '5px'
                    }} >Snacks & Beverages</button>
                </div>
                <div className="col-md-2">
                    <button style={{
                        backgroundColor: 'red',
                        color: 'white',
                        height: '44px',
                        width: '90%',
                        borderRadius: '8px',
                        marginBottom: '5px'
                    }} >Midnight</button>
                </div>
            </div>
        </>
    )
}