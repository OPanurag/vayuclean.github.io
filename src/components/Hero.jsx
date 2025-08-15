// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')", // Place your image in public/images/
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          VayuClean Technologies
        </h1>
        <p className="text-xl text-gray-200 mb-6">
          Pioneering clean energy solutions for tomorrow.
        </p>
        <a
          href="#services"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
