import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/hero.jpg')" }}
      id="Header"
    >
      <div className="container mx-auto px-6 md:px-20 lg:px-32 pt-24 pb-16 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-5">
            THE 1<sup>ST</sup> <br className="hidden sm:block" /> BUILDING
          </h1>
          <p className="mb-8 text-neutral-300">
            <span className="text-lg sm:text-xl md:text-2xl font-bold mb-4 block">
              최고의 건축과 편리함이
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium">
              당신의 비즈니스를 성공으로 이끌어 줍니다
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
