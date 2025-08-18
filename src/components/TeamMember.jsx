import React from 'react';

export default function TeamMember({ image, name, role, bio, reverse = false }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start gap-6 mb-16 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Text Content */}
      <div
        className={`text-center md:text-left ${reverse ? 'md:text-right' : ''}`}
      >
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-blue-700 font-semibold mb-2">{role}</p>
        <p className="text-gray-700 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
