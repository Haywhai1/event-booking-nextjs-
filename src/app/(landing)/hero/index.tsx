"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";


const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonAnim: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-img.jpg"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Hero content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center text-white">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-6xl font-bold leading-tight"
          >
            Welcome to Eventra
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg md:text-xl text-gray-200"
          >
            Seamless Event Planning. Effortless Booking.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            variants={buttonAnim}
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 transition-colors rounded-lg text-white font-semibold shadow-lg"
          >
            Start Booking
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
