import React from 'react';
import Hero from '../components/Hero';
import TeamMember from '../components/TeamMember';

export default function About() {
  const team = [
    {
      name: 'Anurag Sharma',
      role: 'Founder & CEO',
      bio: 'Drives the vision and strategic direction of VayuClean with 15+ years of industry experience.',
      image: '/resources/team/anurag-sharma.jpg',
    },
    {
      name: 'Priya Deshmukh',
      role: 'Head of Engineering',
      bio: 'Leads product innovation and manufacturing excellence.',
      image: '/resources/team/priya-deshmukh.jpg',
    },
    {
      name: 'Rahul Mehta',
      role: 'Sales Director',
      bio: 'Manages client relationships and global sales strategies.',
      image: '/resources/team/rahul-mehta.jpg',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Quality Assurance Lead',
      bio: 'Ensures adherence to international standards and cleanroom regulations.',
      image: '/resources/team/sneha-kulkarni.jpg',
    },
    {
      name: 'Vikas Joshi',
      role: 'Operations Manager',
      bio: 'Oversees production schedules, logistics, and vendor coordination.',
      image: '/resources/team/vikas-joshi.jpg',
    },
    {
      name: 'Meera Iyer',
      role: 'Marketing & Branding',
      bio: 'Builds VayuClean’s public image and customer engagement.',
      image: '/resources/team/meera-iyer.jpg',
    },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <Hero
        // Use either backgroundImage OR backgroundColor
        backgroundImage=""
        backgroundColor="#1E40AF" // and enable solid color (blue-800)
        minHeight="500px"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Learn more about VayuClean Technologies and our mission to innovate
            cleanroom environments.
          </p>
        </div>
      </Hero>

      {/* About Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-6">
            VayuClean Technologies is a pioneering force in cleanroom and
            pharmaceutical equipment innovation. With decades of combined
            industry expertise, we deliver cutting-edge, sustainable, and
            regulatory-compliant solutions.
            <br />
            <br />
            From air showers and pass boxes to modular cleanrooms and bio-safety
            cabinets, our offerings are trusted by leading institutions
            globally.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission is simple — to provide efficient, reliable, and
            technologically advanced cleanroom products that empower pharma,
            biotech, and electronics industries to meet the highest standards of
            hygiene and performance.
          </p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Team
          </h2>
          {team.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              bio={member.bio}
              reverse={index % 2 === 1} // alternate layout
            />
          ))}
        </div>
      </section>
    </div>
  );
}
