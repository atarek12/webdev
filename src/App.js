import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact';
import NavBar from './components/NavBar';

import onScrolling from './assets/js/scroll'
import Footer from './components/Footer';

export default function App() {

  onScrolling();

  return (
    <div >
      <Home />
      <NavBar />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

