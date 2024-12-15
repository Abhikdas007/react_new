import React from 'react'
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Price from '../components/Price';
import Footer from '../components/Footer';
import ContentStart from '../components/ContentStart';
import AppDesing from '../components/AppDesing';
import Address from '../components/Address';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <About />
      <Portfolio />
      <Price />
      <ContentStart />
      <AppDesing />
      <Blog />
      <Address />
      <Contact/>
      
    </>
  )
}

export default Home