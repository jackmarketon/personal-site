'use client';

import React from 'react';
import Footer from "./components/Footer";
import Hero from './components/Hero';
import About from './components/About';
import Links from './components/Links';

const Home = () => {
  return (<>
    <Hero />
    <About />
    <Footer />
  </>);
}

export default Home;