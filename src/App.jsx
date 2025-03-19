import React, { useState } from 'react';
import { Route, Routes } from "react-router";
import './App.css'
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import CoursePage from './CoursePage';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className='h-screen w-full flex flex-col justify-between items-center'>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/courses" element={<CoursePage />}></Route>
      </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App;
