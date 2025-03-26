import React from "react";
import Hero from "../components/Banner/Hero";
import EnviromentBanner from "../components/Banner/EnviromentBanner"
import ServicesSection from "../shared/Section";
import { convenienceData, convenienceData_2 } from "../Data/data";
import EventBanner from "../components/Banner/EventsBanner";
import Gallery from "../components/Gallery/Gallery";
import FooterBanner from "../components/Banner/FooterBanner";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ServicesSection data={convenienceData} />
      <EnviromentBanner/>
       {/* Reversed Order */}
       <ServicesSection data={convenienceData_2} reverse={true} />
       <EventBanner/>
       <Gallery/>
       <FooterBanner/>
    </div>
  );
};

export default Home;
