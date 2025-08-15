import React from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-[4px] fixed w-full z-50">
      <div className="container mx-auto px-6 pt-2 pb-0 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/resources/logo.png"
            alt="VayuClean Technologies"
            className="h-20 w-auto -mt-4 drop-shadow-md"
          />
        </a>

        {/* Navigation Links */}
        <div className="space-x-5 text-2xl font-semibold drop-shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative inline-block group hover:text-gray-800"
              style={{
                color: '#42CDFF',
                WebkitTextStroke: '0.4px black',
              }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
