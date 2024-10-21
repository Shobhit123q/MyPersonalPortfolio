import "./Heroimg2.css";
import React from "react";

const Heroimg2 = ({Heading, Text}) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{Heading}</h1>
        <p>{Text}</p>
      </div>
    </div>
  );
};

export default Heroimg2;
