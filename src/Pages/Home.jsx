import React from "react";
import Hero from "../components/Hero/Hero";
import EnviromentBanner from "../components/Hero/EnviromentBanner"
import ServicesSection from "../shared/Section";
import { convenienceData, convenienceData_2 } from "../Data/data";
import EventBanner from "../components/Hero/EventsBanner";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ServicesSection data={convenienceData} />
      <EnviromentBanner/>
       {/* Reversed Order */}
       <ServicesSection data={convenienceData_2} reverse={true} />
       <EventBanner/>
    </div>
  );
};

export default Home;
