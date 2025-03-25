import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { CiGlobe } from "react-icons/ci";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  const navLinks = [
    { href: "#", label: "소개" },
    { href: "#", label: "편의시설" },
    { href: "#", label: "환경" },
    { href: "#", label: "특별함" },
    { href: "#", label: "서비스" },
    { href: "#", label: "문의하기" },
  ];
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <h3 className="cursor-pointer text-white">Mirae Asset CENTER<sup className="text-sm">1</sup></h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="cursor-pointer hover:text-gray-400"
            >
              {label}
            </a>
          ))}
        </ul>

        <button className="hidden md:block  px-8 py-2 rounded-full">
          <CiGlobe className="w-[18px] h-[18px] cursor-pointer text-white"/>
        </button>

        {/*----Mobile Menu Icon----*/}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setMobileMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full bg-white transition-all ${
          mobileMenu ? "h-screen" : "h-0 overflow-hidden"
        }`}
      >
        <div className="flex justify-end p-6">

          <img
            src={assets.cross_icon}
            alt="Close"
            className="w-6 cursor-pointer"
            onClick={() => setMobileMenu(false)}
          />
        </div>

        <ul className="flex flex-col items-center gap-16 mt-5 px-5 text-lg font-medium">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-full inline-block"
              onClick={() => setMobileMenu(false)}
            >
              {label}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
