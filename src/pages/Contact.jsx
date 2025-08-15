import Hero from '../components/Hero';

export default function Contact() {
  return (
    <>
      <Hero backgroundImage="/resources/contact-hero.jpg" minHeight="600px" showScroll={false}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl text-gray-300">
          We're here to help. Reach out to us for inquiries or support.
        </p>
      </Hero>

      {/* Contact form or other content */}
    </>
  );
}
