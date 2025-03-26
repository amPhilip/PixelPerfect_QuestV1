import React, { useState, useEffect, useCallback } from "react";
import { assets } from "../../assets/assets";
import { IoChevronForwardOutline } from "react-icons/io5";

const slides = [assets.banner, assets.banner_2, assets.convenience_3];

const EnvironmentBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change slides
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  // Auto slide change every 5s
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center transition-all duration-1000 overflow-hidden"
      style={{ backgroundImage: `url(${slides[currentSlide]})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="banner-content space-y-[10%]">
            <h1 className="text-white text-[35px] sm:text-[45px] md:text-[55px] font-bold leading-tight scale-90 origin-top-left">
              The 1
              <sup className="text-[20px] sm:text-[25px] align-super font-semibold">
                ST
              </sup>
              Environment you <br className="hidden sm:block" /> would imagine
            </h1>

            <div className="space-y-4 text-white/90 pt-4 sm:pt-6 border-t border-gray-400 w-full sm:w-3/4">
              <p className="text-sm sm:text-base md:text-lg">
                서울 홍제천은 각각 마다매출 촉진과 환경적 요건이며, 편리성과의
                만족이 만나는 창작적인 여유로운 CENTER로 목적의 이유가 있는 것을
                돕습니다.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                이정적인 환경이 필요한 것이 아니라, 국내 최초 스튜디오 환경을
                기초로 한 디자인하여 국내외에서 친환경 건축을 완성합니다.
              </p>

              <button className="group flex items-center justify-evenly w-[80px] sm:w-[100px] h-[20px] sm:h-[40px] border border-white bg-transparent text-white text-xs cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                View More
                <IoChevronForwardOutline className="text-white ml-1 sm:ml-2 transition-all duration-300 group-hover:text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-6 h-1.5 sm:w-8 sm:h-2 rounded transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EnvironmentBanner;
