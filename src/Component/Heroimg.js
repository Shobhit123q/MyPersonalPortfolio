import React from "react";
import "./Heroimg.css";
import IntroImg from "../Assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
        <div className="content">
          <p>Hi, My Name is Shobhit Mishra.</p>
          <h1>React Developer</h1>
          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contacts" className="btn btn-light">
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
 