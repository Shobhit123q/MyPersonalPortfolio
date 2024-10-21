import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Heroimg2 from "../Component/Heroimg2";
import PricingCard from "../Component/PricingCard";
import Work from "../Component/Work";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 Heading="PROJECTS." Text="Some of my most recent work" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Projects;
