// components/Hero.js
const Hero = () => {
    return (
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-photo/rear-view-large-group-music-fans-front-stage-music-concert-by-night-copy-space_637285-623.jpg?t=st=1746113972~exp=1746117572~hmac=5c9674870252f1f6402befd2446b2cd7e3efde47b797e4d21ba17b573e924520&w=1800)',
        }}
      >
        {/* Transparent black overlay to improve text visibility */}
        <div className="absolute inset-0" style={{ backgroundColor: '#000000CC' }}></div>
  
        {/* Content inside the Hero */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          {/* Eventra Brand */}
          <h1 className="text-5xl md:text-7xl font-bold">Welcome to Eventra</h1>
          
          {/* Tagline */}
          <p className="mt-4 text-xl">Seamless Event Planning. Effortless Booking.</p>

          {/* Call to Action */}
          <a
            href="#services"
            className="mt-6 inline-block px-6 py-3 bg-[#f96306] text-white rounded-lg"
          >
            Start Booking
          </a>
        </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  