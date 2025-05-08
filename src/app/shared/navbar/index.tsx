"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
    if(!isNavOpen){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "scroll"
    }
  } // State to manage the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isSticky ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="z-20 text-2xl md:text-3xl font-bold text-[#f96306]">
            EVENTRA
          </a>

          {/* Hamburger Icon for mobile */}
          <div
            className="md:hidden flex items-center z-20"
            onClick={handleNav} // Toggle menu visibility
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Menu List */}
          <ul
            className={`md:flex space-x-6 md:text-xl transition-all duration-300 ease-in-out ${
              isNavOpen
                ? "absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center text-white text-2xl space-y-6"
                : "hidden"
            }`}
          >
            <li>
              <a href={"/hero"}className="hover:text-[#f96306]">
                Home
              </a>
            </li>
            <li>
              <a href={"/about"}className="hover:text-[#f96306]">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#f96306] ">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#f96306]">
              Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
