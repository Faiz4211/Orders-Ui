import React from 'react';
import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Banner from './Components/Banner';
// import Footer from './Components/Footer';
// import Header from './Components/Header';
// import ImageDetail from './Components/Details/ImageDetail';
// import CardDetail from './Components/Details/CardDetail';
// import Login from './Components/CustomComponents/Login';
// import Payment from './Components/CustomComponents/Payment';
// import Otp from './Components/CustomComponents/Otp';
// import Checkout from './Components/CustomComponents/Checkout';

export default function App() {
  const img = {
    paymentGif: require('../src/assets/images/payment gif.gif')
  }

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [id, setId] = useState('');
  const [amount, setAmount] = useState('');

  const handlSubmitt = (e) => {
    e.preventDefault();
    if (!email || !phoneNumber || !id || !amount) {
      alert('Enter all fields')
    }
    else {
      alert('Success')
      setEmail('')
      setPhoneNumber('')
      setId('')
      setAmount('')
    }
  }

  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Otp' element={<Otp />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/ImageDetail' element={<ImageDetail />} />
        <Route path='/CardDetail' element={<CardDetail />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Footer />} />
      </Routes> */}

      <div className='container mb-4'>
        <div className="row">

          {/* column of 6  */}
          <div className="col-md-6 align-self-center">
            <img className='img-fluid' src={img.paymentGif} alt='gif' />
          </div>

          {/* column of  6 */}
          <div className="col-md-6">
            <h2 className='mt-2 py-2 text-center'>Make a Payment</h2>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="number" class="form-control" id="exampleFormControlInput1" placeholder="+92123456789" />
            </div>

            <div class="form-group mb-3">
              <label for="exampleFormControlSelect1" class="form-label">Payment Method</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Select Payment Method</option>
                <option>Credit Card</option>
                <option>Paypal</option>
                <option>Brank Transfer</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Transcation Id</label>
              <input value={id} onChange={(e) => setId(e.target.value)} type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Transaction Id" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Enter Amount</label>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" class="form-control" id="exampleFormControlInput1" placeholder="Amount" />
            </div>
            <button onClick={handlSubmitt} type="button" class="btn btn-primary">Pay Now</button>
          </div>

        </div>
      </div>
    </>
  )
}