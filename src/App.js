import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ImageDetail from './Components/Details/ImageDetail';
import SideDrawer from './Components/SideDrawer';
import CardDetail from './Components/Details/CardDetail';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/SideDrawer' element={<SideDrawer />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/ImageDetail' element={<ImageDetail />} />
        <Route path='/CardDetail' element={<CardDetail />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Footer />} />
      </Routes>
    </>
  )
}