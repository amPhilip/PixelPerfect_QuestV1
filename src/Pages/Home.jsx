import React from "react";
import Hero from "../components/Hero/Hero";
import ServicesSection from "../shared/Section";
import { convenienceData } from "../Data/data";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ServicesSection data={convenienceData} />
    </div>
  );
};

export default Home;
