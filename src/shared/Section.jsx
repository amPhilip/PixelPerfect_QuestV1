import { useState } from "react";

export default function ServicesSection({ reverse = false, data }) {
  const [activeCard, setActiveCard] = useState(0); 

  return (
    <section className="bg-[#242424] text-white py-8 sm:py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
          {data.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl mt-2 text-center sm:text-left">
          {data.subtitle}{" "}
          <span className="text-orange-400 font-bold">{data.highlight}</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 items-start">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className={`group bg-transparent overflow-hidden shadow-lg transform transition-all duration-300 relative ${
                index === activeCard
                  ? "scale-105"
                  : "hover:scale-105"
              } ${
                reverse
                  ? index === 0
                    ? "md:mt-0"
                    : index === 1
                    ? "md:mt-4"
                    : "md:mt-8"
                  : index === 0
                  ? "md:mt-8"
                  : index === 1
                  ? "md:mt-4"
                  : "md:mt-0"
              }`}
              onMouseEnter={() => setActiveCard(index)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 sm:h-48 object-cover rounded-none"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base mt-2 text-gray-300 leading-relaxed break-words">
                  {card.description}
                </p>
              </div>
              {/* Border-Bottom*/}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700">
                <div
                  className={`absolute left-0 w-1/2 h-full transition-all duration-300 origin-left transform ${
                    index === activeCard
                      ? "scale-x-100 bg-orange-400"
                      : "scale-x-0 group-hover:scale-x-100 group-hover:bg-orange-400"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
