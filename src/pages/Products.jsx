import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const productList = [
  {
    id: 'air-showers',
    title: 'Air Showers',
    desc: 'Decontamination chambers for personnel or materials.',
    image: '/resources/products/air-shower.jpg',
  },
  {
    id: 'pass-boxes',
    title: 'Pass Boxes',
    desc: 'Static and dynamic pass boxes for contamination control.',
    image: '/resources/products/pass-box.jpg',
  },
  {
    id: 'laminar-flow-units',
    title: 'Laminar Flow Units',
    desc: 'HEPA-filtered air systems for sterile conditions.',
    image: '/resources/products/laminar-flow.jpg',
  },
  {
    id: 'modular-clean-rooms',
    title: 'Modular Clean Rooms',
    desc: 'Scalable, pre-fabricated cleanroom setups.',
    image: '/resources/products/modular-cleanroom.jpg',
  },
  {
    id: 'bio-safety-cabinets',
    title: 'Bio Safety Cabinets',
    desc: 'Protect personnel, product, and environment.',
    image: '/resources/products/biosafety-cabinet.jpg',
  },
  {
    id: 'dispensing-booths',
    title: 'Dispensing Booths',
    desc: 'Containment systems for powder handling.',
    image: '/resources/products/dispensing-booth.jpg',
  },
];

export default function Products() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <Hero backgroundImage="/resources/products-banner.jpg" minHeight="500px">
        <div className="text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
          >
            Our Products
          </h1>
          <p
            className="text-lg md:text-2xl text-gray-200"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
          >
            Explore our range of advanced cleanroom and pharmaceutical equipment.
          </p>
        </div>
      </Hero>

      {/* Product Cards */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {productList.map(({ id, title, desc, image }) => (
            <Link
              key={id}
              to={`/products/${id}`}
              className="group block bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-700">{desc}</p>
                <span className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                  Know More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
