import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const images = [
  assets.gallery_1,
  assets.gallery_2,
  assets.gallery_3,
  assets.gallery_4,
  assets.gallery_5,
  assets.gallery_6,
  assets.gallery_7,
];

const titles = Array(images.length).fill("Gallery");

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      ref={sliderRef}
      className="relative flex flex-col items-center w-full h-[600px] overflow-hidden bg-[#242424] text-white"
    >
      <div className="absolute top-[10%] text-center w-full px-4">
        <h1 className="text-3xl font-bold">CENTER 1</h1>
        <p className="text-lg text-orange-400">미래에셋센터원 AVENUE</p>
        <div className="mt-2 border-t border-gray-500 w-48 mx-auto"></div>
      </div>

      {/*---Slider Section---*/}
      <div className="relative flex justify-center items-center w-full h-full overflow-hidden mt-[10%]">
        {images.map((image, index) => {
          let position = (index - activeIndex + images.length) % images.length;
          let isCenter = position === 2;

          let width = isCenter ? "220px" : "180px";
          let height = isCenter ? "260px" : "220px";
          let scale = isCenter
            ? 1.3
            : position === 1 || position === 3
            ? 1.1
            : 1;
          let opacity = isCenter
            ? 1
            : position === 1 || position === 3
            ? 0.8
            : position === 0 || position === 4
            ? 0.3
            : 0;
          let zIndex = isCenter ? 3 : position === 1 || position === 3 ? 2 : 1;

          let spacingOffset = 1.1;
          let translateX = isCenter
            ? "0%"
            : position === 1
            ? `-${130 * spacingOffset}%`
            : position === 3
            ? `${130 * spacingOffset}%`
            : position === 0
            ? `-${220 * spacingOffset}%`
            : `${220 * spacingOffset}%`;

          return (
            <motion.div
              key={index}
              className="absolute transition-all duration-500 shadow-lg flex flex-col items-center"
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                width: width,
                height: height,
              }}
            >
              {/* Image area with gradient border-bottom */}
              <div
                className="relative w-full bg-cover bg-center"
                style={{
                  height: "100%",
                  backgroundImage: `url(${image})`,
                  borderBottom: "4px solid",
                  borderImage:
                    "linear-gradient(to right, orange 50%, grey 50%) 1",
                }}
              ></div>

              <p className="text-white font-bold text-xs text-left w-full mt-1">
                {titles[index]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
