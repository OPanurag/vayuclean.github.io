import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="pt-0">
      {/* Custom Hero for Home page */}
      <Hero backgroundImage="/resources/home-hero-banner.jpg" minHeight="900px">
        <h1
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
        >
          VayuClean Technologies
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-200 mb-8"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
        >
          Pioneering clean room solutions for tomorrow.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition"
        >
          Learn More
        </a>
      </Hero>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {Array(6).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Solar Solutions</h3>
                <p>Efficient and scalable solar panel installations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Energy Audits</h3>
                <p>Optimize and reduce energy consumption effectively.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Maintenance</h3>
                <p>Reliable maintenance for long-term performance.</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
