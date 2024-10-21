import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fade,Slide } from "react-awesome-reveal";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true);
    }else { 
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <>
      <div className={color? "header header-bg" : "header"}>
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={clickHandler}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
     {click &&  <Slide duration={2000}><ul className={`nav-menu mobile-menu ${click ? 'active' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul></Slide>}
    </>
  );
};

export default Navbar;
