const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image as img tag */}
      <img
        src="/images/hero-img.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Hero content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to Eventra
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Seamless Event Planning. Effortless Booking.
          </p>
          <a
            href="#services"
            className="mt-6 inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 transition-colors rounded-lg text-white"
          >
            Start Booking
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
