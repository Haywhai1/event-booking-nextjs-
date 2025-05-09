const Hero = () => {
  return (
    <section className="relative h-[100vh] bg-cover bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-scroll bg-[url('/images/hero-img.jpg')]">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80 w-full h-screen">
          {/* Hero content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
