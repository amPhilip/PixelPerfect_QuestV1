import React, { useState, useEffect, useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { assets } from "../../assets/assets";

const EventBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const eventSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setFadeOut(false);
        } else {
          setFadeOut(true);
          setTimeout(() => setIsVisible(false), 600); // Delay hide after animation
        }
      },
      { threshold: 0.2 }
    );

    if (eventSectionRef.current) {
      observer.observe(eventSectionRef.current);
    }

    return () => {
      if (eventSectionRef.current) {
        observer.unobserve(eventSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={eventSectionRef}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative p-6"
    >
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
        <div className="md:w-1/2 p-4 relative">
          <h2 className="text-lg font-bold mb-4">지금 살펴봐야할 이벤트</h2>
          <div className="relative aspect-square overflow-hidden">
            <img
              src={assets.events}
              alt="Event Image"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm mt-2 font-medium">
            미래에셋센터원 크리스마스 작은 음악회
          </p>
          <ul className="text-sm list-disc list-inside mt-2">
            <li>공연 내용: 재즈 4중주 연주</li>
            <li>부가 혜택: 크리스마스 트리 설치 및 커피 배포</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">2024.12.20 ~ 2024.12.23</p>
          <CiCirclePlus className="absolute top-4 right-4 text-blue-500 w-6 h-6" />
        </div>

        <div className="md:w-1/3 p-4 relative">
          <h2 className="text-lg font-bold mb-4">센터원 소식</h2>
          <div>
            <h3 className="text-blue-600 font-bold text-sm">
              미래에셋센터원 홈페이지 리뉴얼 안내
            </h3>
            <p className="text-xs text-blue-400 mt-1">
              미래에셋센터원의 공식 홈페이지가 리뉴얼 오픈했습니다. 더 나은
              서비스를 위해 방문해...
            </p>
            <p className="text-xs text-gray-400 mt-5">2024.09.04</p>
          </div>
          <CiCirclePlus className="absolute top-4 right-4 text-blue-500 w-6 h-6" />
        </div>
      </div>

      {/* Floating Icons: Smooth fade-in & fade-out effect */}
      {isVisible && (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2">
          {["🎧 상담센터", "📰 뉴스", "📅 일정", "⬆️ TOP"].map(
            (item, index) => {
              const [emoji, text] = item.split(" ");
              return (
                <div
                  key={index}
                  className={`bg-white p-2.5 rounded-xl shadow-md flex flex-col items-center transition-all duration-500 ${
                    fadeOut
                      ? `opacity-0 translate-y-4 delay-${index * 100}`
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <span className="text-xl">{emoji}</span>
                  <p className="text-xs mt-1">{text}</p>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default EventBanner;
