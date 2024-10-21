import React from 'react';
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Heroimg2 from '../Component/Heroimg2';
import AboutContent from '../Component/AboutContent';


const About = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg2 Heading="ABOUT." Text="Im a friendly React Developer" />
     <AboutContent />
     <Footer/>
    </div>
  )
}

export default About
