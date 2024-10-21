import "./Footer.css";
import React from "react";
import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kanpur,Uttar Pradesh</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-7985191516
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Shobhitid65@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I am a passionate React engineer dedicated to crafting dynamic and
            responsive web applications. With a strong foundation in JavaScript
            and a keen eye for detail, I thrive on solving complex problems and
            creating user-centric designs. My goal is to continuously learn and
            grow in the field of React development, contributing to innovative
            projects that make a difference.
          </p>
          <div className="social">
            <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            <FaLinkedinIn
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
