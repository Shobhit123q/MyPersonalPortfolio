import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Router/Home';
import Projects from './Router/Projects';
import About from './Router/About';
import Contact from './Router/Contact';



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about'  element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
