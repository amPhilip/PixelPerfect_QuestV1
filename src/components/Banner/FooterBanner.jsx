import React from "react";
import { assets } from "../../assets/assets";

const FooterBanner = () => {
  return (
    <section
      className="min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.banner_2})` }}
    >
      <div className="container mx-auto px-6 md:px-20 lg:px-32 pt-24 pb-16 text-white flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[85%] mb-5">
            <span className="inline-block transform scale-95">MIRAE ASSET</span><br />
            <span className="inline-block transform scale-96">CENTER 1</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
