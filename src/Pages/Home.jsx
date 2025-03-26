import React from "react";
import Hero from "../components/Hero/Hero";
import EnviromentBanner from "../components/Hero/EnviromentBanner"
import ServicesSection from "../shared/Section";
import { convenienceData } from "../Data/data";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ServicesSection data={convenienceData} />
      <EnviromentBanner/>
    </div>
  );
};

export default Home;
