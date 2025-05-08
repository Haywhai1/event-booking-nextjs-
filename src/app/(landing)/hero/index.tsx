const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-scroll"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/rear-view-large-group-music-fans-front-stage-music-concert-by-night-copy-space_637285-623.jpg?t=st=1746113972~exp=1746117572~hmac=5c9674870252f1f6402befd2446b2cd7e3efde47b797e4d21ba17b573e924520&w=1800')",
        }}
      ></div>

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
    </section>
  );
};

export default Hero;
