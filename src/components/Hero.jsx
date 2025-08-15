import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center text-white flex flex-col justify-center items-center" 
    style={{ backgroundImage: "url('/images/hero-bg.jpg')", minHeight: '900px' }}>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center pt-32 z-10">
        <h1
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
        >
          VayuClean Technologies
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-200 mb-8"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}
        >
          Pioneering clean room solutions for tomorrow.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition"
        >
          Learn More
        </a>
      </div>

      {/* Scroll down indicator: OUTSIDE the container */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce text-gray-300 text-lg">
          ↓ Scroll Down
        </div>
      </div>
    </section>
  );
}
