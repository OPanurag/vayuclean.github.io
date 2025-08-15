import React from 'react';
import Hero from '../components/Hero';

export default function Team() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <Hero backgroundImage="/resources/team-banner.jpg" minHeight="500px">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
        >
          Our Core Team
        </h1>
        <p
          className="text-lg md:text-2xl text-gray-200"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
        >
          Meet the minds behind VayuClean Technologies' innovation and excellence.
        </p>
      </Hero>

      {/* Team Members */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Anurag Sharma',
              role: 'Founder & CEO',
              bio: 'Drives the vision and strategic direction of VayuClean with 15+ years of industry experience.',
            },
            {
              name: 'Priya Deshmukh',
              role: 'Head of Engineering',
              bio: 'Leads product innovation and manufacturing excellence.',
            },
            {
              name: 'Rahul Mehta',
              role: 'Sales Director',
              bio: 'Manages client relationships and global sales strategies.',
            },
            {
              name: 'Sneha Kulkarni',
              role: 'Quality Assurance Lead',
              bio: 'Ensures adherence to international standards and cleanroom regulations.',
            },
            {
              name: 'Vikas Joshi',
              role: 'Operations Manager',
              bio: 'Oversees production schedules, logistics, and vendor coordination.',
            },
            {
              name: 'Meera Iyer',
              role: 'Marketing & Branding',
              bio: 'Builds VayuClean’s public image and customer engagement.',
            },
          ].map(({ name, role, bio }, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <p className="text-blue-700 font-semibold mb-2">{role}</p>
              <p className="text-gray-700">{bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
