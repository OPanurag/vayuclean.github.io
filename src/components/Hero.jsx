import React from 'react';

export default function Hero({
  backgroundImage = '/resources/hero-banner.jpg',
  backgroundColor = '', // new prop
  minHeight = '900px',
  children,
  showScroll = true,
}) {
  return (
    <section
      className="relative bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'none',
        backgroundColor: backgroundImage ? '' : backgroundColor, // use color if no image
        minHeight,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Custom Content from page */}
      <div className="relative container mx-auto px-6 text-center pt-32 z-10">
        {children}
      </div>

      {/* Custom scroll indicator */}
      {showScroll && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce text-gray-300 text-lg">↓ Scroll Down</div>
        </div>
      )}
    </section>
  );
}
