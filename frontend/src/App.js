import React from 'react';

import { Footer, Blog, Features, Possibility, WhatProfata, Header, Team } from './containers';
import { Brand, CTA, Navbar } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Brand />
      <WhatProfata />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Team />
      <Footer />
    </div>
  )
}

export default App
