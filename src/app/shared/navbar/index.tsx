"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = !isNavOpen ? "hidden" : "scroll";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ease-in duration-300 ${
        isSticky ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="z-50 text-2xl md:text-3xl font-bold text-orange-600">
            EVENTRA
          </a>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center z-50" onClick={handleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white text-xl">
            <li><a href="/hero" className="hover:text-[#f96306]">Home</a></li>
            <li><a href="/about" className="hover:text-[#f96306]">About</a></li>
            <li><a href="#services" className="hover:text-[#f96306]">Contact</a></li>
            <li><a href="#contact" className="hover:text-[#f96306]">Services</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu with transition */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 text-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center h-full space-y-6 text-2xl">
          <li><a href="/hero" className="hover:text-[#f96306]" onClick={handleNav}>Home</a></li>
          <li><a href="/about" className="hover:text-[#f96306]" onClick={handleNav}>About</a></li>
          <li><a href="#services" className="hover:text-[#f96306]" onClick={handleNav}>Contact</a></li>
          <li><a href="#contact" className="hover:text-[#f96306]" onClick={handleNav}>Services</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
