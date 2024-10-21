import React from 'react';
import Navbar from '../Component/Navbar';
import Heroimg from '../Component/Heroimg';
import Footer from '../Component/Footer';
import Work from '../Component/Work';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work/>
      <Footer />
    </div>
  )
}

export default Home
